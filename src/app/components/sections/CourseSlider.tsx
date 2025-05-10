import React from "react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import CourseCard from "@/app/components/ui/CourseCard";
import Slider from "@/app/components/common/Slider";

const courses = [
  {
    id: 1,
    title: "Scratch Coding for Beginners",
    description:
      "A perfect introduction to coding concepts for young learners, using the colorful and intuitive Scratch platform.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
    level: "Beginner",
    duration: "8 weeks",
    ageGroup: "Ages 5-8",
  },
  {
    id: 2,
    title: "Python Adventures",
    description:
      "Dive into real coding with Python, learning fundamentals while creating games and interactive stories.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800",
    level: "Intermediate",
    duration: "10 weeks",
    ageGroup: "Ages 9-12",
  },
  {
    id: 3,
    title: "Web Development Explorers",
    description:
      "Learn HTML, CSS, and basic JavaScript to create and publish your own websites and web applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
    level: "Intermediate",
    duration: "12 weeks",
    ageGroup: "Ages 10-14",
  },
  {
    id: 4,
    title: "App Development with MIT App Inventor",
    description:
      "Design and build your own Android mobile apps using the block-based MIT App Inventor platform.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    level: "Intermediate",
    duration: "10 weeks",
    ageGroup: "Ages 9-13",
  },
  {
    id: 5,
    title: "JavaScript Game Development",
    description:
      "Create interactive games and animations while learning JavaScript programming fundamentals.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
    level: "Advanced",
    duration: "14 weeks",
    ageGroup: "Ages 12-16",
  },
  {
    id: 6,
    title: "Robotics with LEGO Mindstorms",
    description:
      "Combine engineering and programming to build and program robots that respond to their environment.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    level: "Intermediate",
    duration: "12 weeks",
    ageGroup: "Ages 8-14",
  },
];

const CourseSlider = () => {
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
              title={course.title}
              description={course.description}
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
            href="#"
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
