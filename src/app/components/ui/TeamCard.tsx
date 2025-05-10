import { cn } from "@/lib/utils";

interface TeamCardProps {
  data: any;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ data, index }) => {
  return (
    <article className="flex flex-col items-center w-[210px]">
      <div
        className={cn(
          `flex relative flex-col justify-center max-w-full min-h-[210px] rounded-full w-[210px]`,
          index === 0 && "bg-coducators-blue",
          index === 1 && "bg-coducators-green",
          index === 2 && "bg-coducators-red",
          index === 3 && "bg-coducators-yellow"
        )}
      >
        <img
          src={data?.image}
          alt={data?.name}
          className="p-2 rounded-full object-contain absolute inset-0 top-1/2 z-0 w-full -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col items-center px-2.5 mt-4 text-center">
        <h3
          className={cn(
            `text-xl font-bold leading-snug  uppercase`,
            index === 0 && "text-coducators-blue",
            index === 1 && "text-coducators-green",
            index === 2 && "text-coducators-red",
            index === 3 && "text-coducators-yellow"
          )}
        >
          {data?.name}
        </h3>
        <p className="mt-1 text-base text-gray-600">{data?.role}</p>
      </div>
    </article>
  );
};
