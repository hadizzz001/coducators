'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CourseCard from '@/app/components/ui/CourseCard';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

const CourseGrid = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/course');
        const data = await res.json();

        const formattedCourses = data
          .filter(course => course.soon === "yes") // Filter here
          .map((course) => ({
            _id: course._id,
            title: course.title,
            category: course.category,
            imageUrl: course.img[0],
            level: course.level,
            soon: course.soon,
            duration: `${JSON.parse(course.duration).number} ${JSON.parse(course.duration).unit}`,
            ageGroup: `Ages ${JSON.parse(course.age).from}-${JSON.parse(course.age).to}`,
          }));

        setCourses(formattedCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);


  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <section id="courses" className="py-20 bg-coducators-lightgray cards-aspect-video dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
          <SectionHeading
            title="Courses Starting Soon — Secure Your Spot!"
            subtitle="From beginners to young prodigies, we’ve got a course for every curious mind."
            color="blue"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 dark:bg-gray-900 dark:text-white">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                _id={course._id}
                title={course.title}
                category={course.category}
                imageUrl={course.imageUrl}
                level={course.level}
                duration={course.duration}
                ageGroup={course.ageGroup}
                soon={course.soon}
              />
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseGrid;
