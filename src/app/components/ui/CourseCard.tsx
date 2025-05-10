import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  level: string;
  duration: string;
  ageGroup: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  level,
  duration,
  ageGroup,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden card-shadow max-w-96 flex flex-col",
        className
      )}
    >
      <div className="aspect-video overflow-hidden flex-shrink-0">
        <a href="#">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </a>
      </div>
      <div className="px-5 py-4 flex flex-col flex-1">
        <a href="#">
          <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
            {title}
          </h3>
        </a>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-coducators-blue/10 text-coducators-blue px-3 py-1 rounded-full text-sm">
            {level}
          </span>
          <span className="bg-coducators-green/10 text-coducators-green px-3 py-1 rounded-full text-sm">
            {duration}
          </span>
          <span className="bg-coducators-red/10 text-coducators-red px-3 py-1 rounded-full text-sm">
            {ageGroup}
          </span>
        </div>

        <a
          href="#"
          className="button-primary w-full mt-auto text-white bg-coducators-blue py-2 px-2 rounded-xl text-center"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
