'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import { TeamCard } from "@/app/components/ui/TeamCard";
import { motion } from "framer-motion";

const CourseGrid = () => {
  const [admins, setAdmins] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/team');
        const data = await res.json();

        // Separate admins and teachers
        const adminsList = data.filter(member => member.category === 'admin');
        const teachersList = data.filter(member => member.category === 'teacher');

        setAdmins(adminsList);
        setTeachers(teachersList);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <section id="team" className="py-20 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">

          {/* Admin Section */}
          <SectionHeading
            title="Our Admins "
            subtitle="Meet the leadership team behind our mission."
            color="blue"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 dark:bg-gray-900 dark:text-white">
            {admins.map((member, index) => (
              <motion.div
                key={`admin-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid place-items-center"
              >
                <TeamCard index={index} data={member} />
              </motion.div>
            ))}
          </div>

          {/* Teacher Section */}
          <SectionHeading
            title="Our Teachers"
            subtitle="Passionate educators dedicated to student success."
            color="blue"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
            {teachers.map((member, index) => (
              <motion.div
                key={`teacher-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid place-items-center"
              >
                <TeamCard index={index} data={member} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseGrid;
