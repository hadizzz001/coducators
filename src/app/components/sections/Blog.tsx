'use client';

import { useEffect, useState } from "react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import BlogCard from "@/app/components/ui/BlogCard";
import Slider from "@/app/components/common/Slider";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();

        // Get last 3 items and reverse them for newest-first
        const latestThree = data.slice(-3).reverse().map((item: any) => ({
          _id: item._id,
          title: item.title,
          excerpt: item.description.replace(/<[^>]+>/g, ""), // strip HTML tags
          imageUrl: item.img[0],
          date: new Date(item.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          author: item.author, 
        }));

        setBlogPosts(latestThree);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="hide-arrows py-20 bg-coducators-lightgray">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog & Resources"
          subtitle="Stay inspired with expert tips, parent guides, and the latest in tech education from the Coducators community."
          color="red"
        />

        <Slider
          items={blogPosts}
          renderItem={(post: any, index: React.Key) => (
            <div
              key={index}
              className="w-[320px] h-[420px] flex-shrink-0 mx-auto" // force uniform size
            >
              <BlogCard data={post} />
            </div>
          )}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        />


        <div className="text-center  ">
          <a
            href="/blogs"
            className="inline-block py-3 px-8 bg-coducators-red text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
