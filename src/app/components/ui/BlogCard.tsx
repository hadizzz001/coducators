import { cn } from "@/lib/utils";

interface BlogCardProps {
  data?: any;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ data, className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300 h-[400px]",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        
          <img
            src={data?.imageUrl}
            alt={data?.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
       
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">{data?.date}</span>
          
        </div>
       
          <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
            {data?.title}
          </h3>
        

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-500">By {data?.author}</span>
          <a
            href={`/blog?id=${data?._id}`}
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
