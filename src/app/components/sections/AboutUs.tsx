import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "2K+",
    label: "Students Taught",
  },
  {
    value: "15+",
    label: "Courses Developed",
  },
  {
    value: "25+",
    label: "Qualified Instructors",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Us"
          subtitle="Learn about our journey in educational technology and our passion for teaching kids to code."
          color="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Inspiring Young Minds with the Power of Code
            </h3>

            <p className="text-gray-700 mb-6">
              Coducators began with a simple idea: make coding fun and
              accessible for kids of all ages. Founded by a group of passionate
              educators and tech professionals.
            </p>

            <p className="text-gray-700 mb-6">
              Our teaching methodology focuses on project-based learning,
              allowing children to see immediate results while building critical
              thinking and problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-2 2xl:gap-6 items-start mt-12 text-center max-md:mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center pr-2 2xl:px-6 max-md:px-5 w-[140px] lg:w-[130px] 2xl:w-[140px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                >
                  <div
                    className={cn(
                      `w-16 h-16 text-2xl font-bold leading-none rounded-full grid place-items-center bg-opacity-10 min-h-16`,
                      index === 0 && "bg-coducators-blue/15 text-coducators-blue",
                      index === 1 && "bg-coducators-green/15 text-coducators-green",
                      index === 2 && "bg-coducators-red/15 text-coducators-red",
                      index === 3 && "bg-coducators-yellow/15 text-coducators-yellow"
                    )}
                  >
                    {stat.value}
                  </div>
                  <p className="z-10 mt-2.5 text-base font-medium leading-6 text-gray-700">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl relative z-[1]">
              <img
                src="/images/aboutUS.jpeg"
                alt="Students learning to code"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coducators-green/55 rounded-full z-0"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-coducators-blue/55 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
