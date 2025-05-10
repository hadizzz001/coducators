
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const faqItems = [
  {
    question: "What age groups are your courses designed for?",
    answer: "Our courses are designed for children ages 5-16. We have different programs tailored to specific age groups and skill levels, ensuring that each child receives age-appropriate instruction and challenges."
  },
  {
    question: "Do children need prior coding experience to join?",
    answer: "No prior experience is needed! Our beginner courses are designed to introduce coding concepts from scratch. For children with some experience, we offer intermediate and advanced courses to continue building their skills."
  },
  {
    question: "How large are your class sizes?",
    answer: "We maintain small class sizes to ensure personalized attention. Typically, our classes range from 6-12 students, depending on the course and age group, with a low student-to-instructor ratio."
  },
  {
    question: "What equipment or software will my child need?",
    answer: "For most courses, students need a computer or laptop with internet access. We primarily use free, web-based platforms and software. Specific requirements are provided before each course begins, and we offer equipment recommendations for families if needed."
  },
  {
    question: "How are classes structured?",
    answer: "Classes typically include a brief lesson introducing concepts, followed by guided coding activities and projects. We incorporate group activities, individual work time, and opportunities for students to share their creations."
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes, we offer both in-person and online classes. Our virtual classrooms provide the same high-quality instruction and interactive experience as our in-person sessions."
  },
  {
    question: "How will I know if my child is progressing?",
    answer: "We provide regular progress reports and host showcase events where students can demonstrate their projects. Parents receive updates on skills developed, challenges faced, and achievements reached."
  },
  {
    question: "Can I get a refund if my child doesn't enjoy the course?",
    answer: "We offer a satisfaction guarantee for the first two classes. If you feel the course isn't a good fit after attending the first two sessions, we provide a prorated refund."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our programs, teaching methods, and enrollment process."
          color="red"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-coducators-lightgray rounded-xl overflow-hidden h-fit">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-100/50">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            {"Still have questions? We're here to help!"}
          </p>
          <a 
            href="#contact"
            className="inline-block py-3 px-8 bg-coducators-blue text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
