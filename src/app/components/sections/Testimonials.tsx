import React from "react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { MessageSquare, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
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
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="lg:w-[48%]"
              key={index}
            >
              <TestimonialCard
                key={index}
                quote="My daughter was initially hesitant about coding, but after just one class with Coducators, she was hooked! The instructors make learning fun and the projects are incredibly engaging."
                name="Jennifer M."
                role="Parent of Sophia, 10"
                imageUrl="https://randomuser.me/api/portraits/women/62.jpg"
                variant={
                  index === 1
                    ? "lime"
                    : index === 2
                    ? "green"
                    : index === 3
                    ? "red"
                    : "blue"
                }
                className={cn(
                  index === 1 && "lg:mt-5",
                  index === 2 && "lg:mt-6",
                  index === 3 && "lg:mt-5"
                )}
                rate={5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
