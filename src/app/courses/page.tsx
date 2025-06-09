'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CourseCard from '@/app/components/ui/CourseCard';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

const CourseGrid = () => {
type Course = {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  level: string;
  soon: string;
  duration: string;
  ageGroup: string;
};

const [groupedCourses, setGroupedCourses] = useState<Record<string, Course[]>>({});


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/course');
        const data = await res.json();

        const formattedCourses = data.map((course) => ({
          _id: course._id,
          title: course.title,
          category: course.category,
          imageUrl: course.img[0],
          level: course.level,
          soon: course.soon,
          duration: `${JSON.parse(course.duration).number} ${JSON.parse(course.duration).unit}`,
          ageGroup: `Ages ${JSON.parse(course.age).from}-${JSON.parse(course.age).to}`,
        }));

        // Group by ageGroup
        const grouped = formattedCourses.reduce((acc, course) => {
          if (!acc[course.ageGroup]) {
            acc[course.ageGroup] = [];
          }
          acc[course.ageGroup].push(course);
          return acc;
        }, {});

        setGroupedCourses(grouped);
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
            title="Our Courses"
            subtitle="Explore our range of coding courses designed for different age groups and skill levels."
            color="blue"
          />

          {/* Render each age group section */}
          {Object.entries(groupedCourses).map(([ageGroup, courses]) => (
            <div key={ageGroup} className="mb-12 dark:bg-gray-900 dark:text-white">
              <h3 className="text-xl font-semibold text-coducators-darkblue mb-4 dark:bg-gray-900 dark:text-white">{ageGroup}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 dark:bg-gray-900 dark:text-white">
                {courses?.map((course) => (
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
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseGrid;
