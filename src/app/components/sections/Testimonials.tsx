'use client'
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { MessageSquare, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'; 
import ReactStars from 'react-rating-stars-component';

const Testimonials: React.FC = () => {
   const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    forr: '',
    name: '',
    son: '',
    age: '',
    description: '',
    stars: 0,
  });
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/rate');
      const data = await res.json();
      setTestimonials(data.slice(0, 4)); // Get only the first 4 items
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    }
  };

  fetchTestimonials();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const ratingChanged = (newRating) => {
    setInputs((prev) => ({ ...prev, stars: newRating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      if (!res.ok) throw new Error('Submission failed');

      alert('Submitted successfully!');
      setShowModal(false);
      setInputs({ forr:'', name: '', son: '', age: '', description: '', stars: 0 });
      window.location.replace(`/reviews`);
    } catch (err) {
      console.error(err);
      alert('Error submitting the form');
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 dark:bg-gray-900 dark:text-white"
    >
<div className="container mx-auto px-4 ">
      <SectionHeading
        title="Testimonials"
        subtitle="See how Coducators is making a difference—straight from those who’ve lived it."
        color="green"
      />

      <div className="flex relative flex-wrap gap-6 justify-between items-start px-5 mt-10 w-full lg:min-h-[550px] max-md:max-w-full">
        {testimonials.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[48%]"
            key={index}
          >
            <TestimonialCard
              forr={item.for}
              quote={item.description}
              name={item.name}
              role={`Parent of ${item.son}, ${item.age}`}
              imageUrl={`https://www.svgrepo.com/show/527946/user-circle.svg`} // or use a proper image from API
              variant={
                index === 1
                  ? 'green'
                  : index === 2
                  ? 'red'
                  : index === 3
                  ? 'blue'
                  : 'blue'
              }
              className={cn(
                index === 1 && 'lg:mt-5',
                index === 2 && 'lg:mt-6',
                index === 3 && 'lg:mt-5'
              )}
              rate={item.stars || 5}
            />
          </motion.div>
        ))}
      </div>
    </div>


<div className="  flex items-center justify-center mt-5">
  <button
    onClick={() => setShowModal(true)}
    className="px-6 py-3 bg-coducators-green text-white rounded-lg shadow hover:bg-green"
  >
    Rate Now!
  </button>
 

  {showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-500 "
          onClick={() => setShowModal(false)}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-black">Submit a Rating</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md text-black"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <input
            type="text"
            name="son"
            placeholder="Son's Name"
            className="w-full px-4 py-2 border rounded-md text-black"
            onChange={handleChange}
            value={inputs.son}
            required
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            className="w-full px-4 py-2 border rounded-md text-black"
            onChange={handleChange}
            value={inputs.age}
            required
          />
          <input
            type="text"
            name="forr"
            placeholder="Subject e.g Course, Workshop or Camp..."
            className="w-full px-4 py-2 border rounded-md text-black"
            onChange={handleChange}
            value={inputs.forr}
            required
          />
          <textarea
            name="description"
            rows={4}
            placeholder="Your Description"
            className="w-full px-4 py-2 border rounded-md text-black"
            onChange={handleChange}
            value={inputs.description}
            required
          />

          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Stars:</label>
            <ReactStars
              count={5}
              size={30}
              value={inputs.stars}
              onChange={ratingChanged} 
              activeColor="#ffd700"
               isHalf={false}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )}
</div>

  <a className="flex items-center justify-center mt-5" href="/reviews">Read More Success Stories!</a>








    </section>
  );
};

export default Testimonials;
