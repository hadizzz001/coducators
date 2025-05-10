import SectionHeading from "@/app/components/ui/SectionHeading";
import BlogCard from "@/app/components/ui/BlogCard";
import Slider from "@/app/components/common/Slider";

const blogPosts = [
  {
    id: 1,
    title: "Why Teaching Kids to Code is Important for Their Future",
    excerpt:
      "Discover how early exposure to coding can develop critical thinking skills and prepare children for the digital economy.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
    date: "May 15, 2023",
    author: "Emma Johnson",
    category: "Education",
  },
  {
    id: 2,
    title: "5 Fun Coding Projects to Try With Your Kids at Home",
    excerpt:
      "Simple and engaging coding activities that parents can do with their children to introduce programming concepts.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
    date: "June 3, 2023",
    author: "Michael Chen",
    category: "Coding",
  },
  {
    id: 3,
    title: "The Evolution of Coding Education for Children",
    excerpt:
      "How teaching programming to kids has changed over the years and where it's heading in the future.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800",
    date: "July 22, 2023",
    author: "Sarah Williams",
    category: "Education",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="hide-arrows py-20 bg-coducators-lightgray">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog & Resources"
          subtitle="Stay updated with the latest in coding education and find resources for parents and educators."
          color="red"
        />

        <Slider
          items={blogPosts}
          renderItem={(post: any, index: React.Key) => (
            <BlogCard key={index} data={post} />
          )}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        />

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block py-3 px-8 bg-coducators-red text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Read More Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
