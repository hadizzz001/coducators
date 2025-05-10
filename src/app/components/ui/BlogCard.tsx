import { cn } from "@/lib/utils";

interface BlogCardProps {
  data?: any;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ data, className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300 h-full",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <a href="#">
          <img
            src={data?.imageUrl}
            alt={data?.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </a>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">{data?.date}</span>
          <a
            href="#"
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              data?.category === "Education" &&
                "bg-coducators-blue/10 text-coducators-blue",
              data?.category === "Coding" &&
                "bg-coducators-green/10 text-coducators-green",
              data?.category === "News" &&
                "bg-coducators-red/10 text-coducators-red"
            )}
          >
            {data?.category}
          </a>
        </div>
        <a href="#">
          <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
            {data?.title}
          </h3>
        </a>
        <p className="text-gray-600 mb-4 line-clamp-3">{data?.excerpt}</p>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-500">By {data?.author}</span>
          <a
            href="#"
            className="text-coducators-blue font-medium text-sm hover:underline transition-all"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
