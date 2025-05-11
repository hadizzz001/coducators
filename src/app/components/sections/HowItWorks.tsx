"use client";
import { motion } from "framer-motion";
import { AddSVG } from "@/app/icons/AddSVG";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    color: "#2196F3",
    text: "Select your Class and Try Free",
  },
  {
    number: "2",
    color: "#84cc16",
    text: "Get Course Based on Interest",
  },
  {
    number: "3",
    color: "#E53935",
    text: "Launch your Coding Journey !",
  },
];

export const HowItWorksSection = () => {
  return (
    <section  className="bg-white">
      <div className="container mx-auto px-4 relative py-20">
        <SectionHeading
          title="How It Works ?"
          subtitle="Seamless Path for best education possible today."
          color="blue"
        />

        <div className="flex flex-col gap-6 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={cn(
                "min-w-60 md:w-80 z-[1]",
                index === 1 && "mx-auto",
                index === steps.length - 1 && "ml-auto"
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="flex justify-center items-center px-5 py-4 w-full rounded-2xl"
                style={{
                  backgroundColor: step.color + "1A",
                  color: step.color,
                }}
              >
                <span className="text-9xl leading-none whitespace-nowrap max-md:text-8xl pr-3">
                  {step.number}
                </span>
                <h3 className="max-md:text-2xl text-3xl leading-9 md:w-[211px] max-md:w-3/4">{step.text}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AddSVG className="absolute z-0 left-20 bottom-10 max-lg:hidden" size={85} />
        <AddSVG className="absolute z-0 right-10 top-1/3  max-lg:hidden" size={60} />
      </div>
    </section>
  );
};
