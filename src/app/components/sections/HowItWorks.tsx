'use client';
import { motion } from 'framer-motion';
import { AddSVG } from '@/app/icons/AddSVG';
import SectionHeading from '../ui/SectionHeading';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const steps = [
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dgkndndub/image/upload/v1749209656/zoom-removebg-preview_qney4t.png"
        alt="Zoom Icon"
        width={68}
        height={68}
      />
    ),
    color: '#2196F3',
    text: 'Book your free trial',
    desc: 'Join a free trial class to explore our programs, meet the team, and experience the fun of tech learning',
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dgkndndub/image/upload/v1749209656/maps-removebg-preview_mwnm85.png"
        alt="Map Icon"
        width={68}
        height={68}
      />
    ),
    color: '#84cc16',
    text: 'Unlock your interest',
    desc: `We design a personalized learning path tailored to your child's interests and level`,
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dgkndndub/image/upload/v1749209656/pc-removebg-preview_gq1rxq.png"
        alt="Laptop Icon"
        width={68}
        height={68}
      />
    ),
    color: '#E53935',
    text: 'Code.\nBuild.\nCreate.',
    desc: 'Dive into hands-on projects to learn, innovate, and have fun',
  },
];

const StepCard = ({ step, delay = 0 }: any) => (
  <motion.div
    className="text-center w-64 "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="relative inline-block">
      <FaMapMarkerAlt size={150} style={{ color: step.color }} />
      <div className="absolute inset-0 flex items-center justify-center mb-10">
        <div className="bg-white p-2 rounded-full shadow-lg">{step.icon}</div>
      </div>
    </div>
    <h3 className="mt-4 text-2xl font-semibold whitespace-pre-line text-gray-800 dark:bg-gray-900 dark:text-white">
      {step.text}
    </h3>
    <hr
      className="my-3 w-16 mx-auto border-2 rounded-full"
      style={{ borderColor: step.color }}
    />
    <p className="text-gray-600 text-sm dark:bg-gray-900 dark:text-white">{step.desc}</p>
  </motion.div>
);

export const HowItWorksSection = () => {
  return (
    <section className=" bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 relative py-20 ">
        <SectionHeading
          title="How it works ?"
          subtitle="From curiosity to creation, we guide every step."
          color="blue"
          className='dark:bg-gray-900 dark:text-white'
        />

        {/* Steps Wrapper */}
        <div className="relative mt-12 flex flex-col items-center gap-12 dark:bg-gray-900 dark:text-white">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start w-full max-w-5xl px-4">
            <StepCard step={steps[0]} />
            <StepCard step={steps[2]} delay={0.2} />
          </div>

          {/* Middle step */}
          <div className="hidden md:block z-10">
            <StepCard step={steps[1]} delay={0.4} />
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col items-center gap-8">
            <div className="w-full flex justify-end">
              <StepCard step={steps[0]} />
            </div>
            <div className="w-full flex justify-start">
              <StepCard step={steps[1]} delay={0.2} />
            </div>
            <div className="w-full flex justify-end">
              <StepCard step={steps[2]} delay={0.4} />
            </div>
          </div>

          {/* Decorative Lines - Desktop only */}
          <div className="absolute top-[180px] left-1/4 w-1/2 h-64 pointer-events-none z-0 hidden md:block">
            <div className="absolute top-0 left-0 w-[50%] border-t-2 border-dashed border-gray-400 transform rotate-[30deg] origin-left" />
            <div className="absolute top-0 right-0 w-[50%] border-t-2 border-dashed border-gray-400 transform -rotate-[30deg] origin-right" />
          </div>
        </div>

        {/* Decorative SVGs */}
        <AddSVG className="absolute z-0 left-20 bottom-10 max-lg:hidden" size={85} />
        <AddSVG className="absolute z-0 right-10 top-1/3 max-lg:hidden" size={60} />
      </div>
    </section>
  );
};
