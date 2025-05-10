import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const WhatWeDo: React.FC = () => {
  const features = [
    "Age-appropriate coding curriculum for kids 5-16",
    "Project-based learning with real-world applications",
    "Small class sizes with personalized attention",
    "Qualified instructors with tech and education backgrounds",
    "Regular progress reports and feedback sessions",
    "Fun, engaging activities that make learning enjoyable",
  ];

  return (
    <section id="what-we-do" className="py-20 bg-coducators-lightgray">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What We Do"
          subtitle="Our approach to teaching coding combines education with fun, creating an environment where children thrive."
          color="green"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl relative z-[1]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
                alt="Collaborative coding environment"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-9 -left-10 w-64 h-64 bg-coducators-red/55 rounded-full z-0"></div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Empowering Kids Through Code
            </h3>

            <p className="text-gray-700 mb-6">
              {
                "At Coducators, we believe that every child deserves the opportunity to learn coding in a way that's fun, engaging, and tailored to their individual needs."
              }
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                >
                  <div className="mr-4 mt-1 bg-coducators-green rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
