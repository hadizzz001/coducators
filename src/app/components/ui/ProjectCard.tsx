interface ProjectCardProps {
  _id: string;
  video: string;
  category: string;
  title: string;
  author: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  video,
  category,
  title,
  author,
  description,
}) => {
  return (
    <article className="hide-arrows overflow-hidden bg-white rounded-2xl border border-solid border-black border-opacity-10 min-w-60">
      <div className="flex overflow-hidden relative flex-col justify-center w-full leading-none text-white">
        <video
          src={video}
          className="object-cover z-0 w-full max-w-xs aspect-[1.67]"
          controls
        />
        <span className="absolute left-2.5 z-0 self-start px-3 py-1.5 bg-coducators-green rounded-full bottom-3">
          {category}
        </span>
      </div>
      <div className="pt-2.5 pb-6 pl-3 mt-2.5 w-full">
        <h3 className="overflow-hidden w-full text-base font-bold text-black">
          {title}
        </h3>
        <p className="mt-2 leading-none text-zinc-700">{author}</p>
        {/* <p className="overflow-hidden mt-2 max-w-full leading-5 text-gray-600 w-[300px]">
          {description}
        </p> */}
        <p>
          <a href={`/project?id=${_id}`} className="block mt-5 max-w-full leading-5 text-gray-600 w-[300px]">
            <span className="text-white px-3 py-1.5 bg-coducators-green rounded-full  ">
              View
            </span>
          </a>
        </p>
      </div>



    </article>
  );
};

export default ProjectCard;
