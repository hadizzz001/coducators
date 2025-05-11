'use client';
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CourseCard from '@/app/components/ui/CourseCard';
import Slider from '@/app/components/common/Slider';

const CourseSlider = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/course');
        const data = await res.json();

        // Transform data as needed for CourseCard
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

        setCourses(formattedCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section id="courses" className="py-20 bg-coducators-lightgray cards-aspect-video">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Courses"
          subtitle="Explore our range of coding courses designed for different age groups and skill levels."
          color="blue"
        />

        <Slider
          items={courses}
          renderItem={(course) => (
            <CourseCard
              _id={course._id}
              soon={course.soon}
              title={course.title}
              category={course.category}
              imageUrl={course.imageUrl}
              level={course.level}
              duration={course.duration}
              ageGroup={course.ageGroup}
            />
          )}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        />

        <div className="text-center mt-6">
          <a
            href="/courses"
            className="inline-block py-3 px-8 bg-coducators-blue text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSlider;
