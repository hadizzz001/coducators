import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button";
import { TeamCard } from "../ui/TeamCard";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Dana El Kak",
    role: "Administration Director",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Curriculum Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Python Instructor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    color: "blue",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Web Development Coach",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Jessica Wong",
    role: "Scratch Programming Specialist",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const Team: React.FC = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const displayedMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 4);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our passionate educators and technology experts are dedicated to inspiring the next generation of coders."
          color="blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid place-items-center"
            >
              <TeamCard index={index} data={member} />
            </motion.div>
          ))}
        </div>

        {!showAllMembers && teamMembers.length > 3 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAllMembers(true)}
              className="bg-coducators-blue text-white hover:bg-blue-700 transition-colors"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
