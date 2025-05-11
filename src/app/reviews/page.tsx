'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/ui/SectionHeading'; 
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';   
import BlogCard from "@/app/components/ui/BlogCard";  
import TestimonialCard from "@/app/components/ui/TestimonialCard"; 
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; 
//@ts-ignore 
import ReactStars from 'react-rating-stars-component';

const Blog: React.FC = () => {
 const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
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
        setTestimonials(data);
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
      setInputs({ name: '', son: '', age: '', description: '', stars: 0 });
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Error submitting the form');
    }
  };

  return (
                    <div className="min-h-screen flex flex-col">
            <Navbar />
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-coducators-lightgray"
    >
<div className="container mx-auto px-4">
      <SectionHeading
        title="Testimonials"
        subtitle="Hear from families who have experienced our coding programs and the impact they've had."
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
              quote={item.description}
              name={item.name}
              role={`Parent of ${item.son}, ${item.age}`}
              imageUrl={`https://www.svgrepo.com/show/527946/user-circle.svg`} // or use a proper image from API
              variant={
                index === 1
                  ? 'lime'
                  : index === 2
                  ? 'green'
                  : index === 3
                  ? 'red'
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

        <h2 className="text-xl font-semibold mb-4">Submit a Rating</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
            value={inputs.name}
            required
          />
          <input
            type="text"
            name="son"
            placeholder="Son's Name"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
            value={inputs.son}
            required
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
            value={inputs.age}
            required
          />
          <textarea
            name="description"
            rows={4}
            placeholder="Your Description"
            className="w-full px-4 py-2 border rounded-md"
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

 





    </section>

     <Footer />
        </div>
  );
};

export default Blog;


















 