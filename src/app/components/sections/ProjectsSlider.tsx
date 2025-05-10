import SectionHeading from "@/app/components/ui/SectionHeading";
import ProjectCard from "@/app/components/ui/ProjectCard";
import Slider from "@/app/components/common/Slider";
const projects = [
  {
    image: "/images/placeholder.png",
    category: "Scratch Coding",
    title: "Space Adventure Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
  {
    image: "/images/placeholder.png",
    category: "Java Store",
    title: "Store Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
  {
    image: "/images/placeholder.png",
    category: "Styling Express",
    title: "Rode To CSS Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
  {
    image: "/images/placeholder.png",
    category: "Weather App",
    title: "Weather Day Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
  {
    image: "/images/placeholder.png",
    category: "Weather App",
    title: "Weather Day Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
  {
    image: "/images/placeholder.png",
    category: "Weather App",
    title: "Weather Day Game",
    author: "by Max, age 10",
    description:
      "Created as part of our Coding Game curriculum. This project demonstrates…",
  },
];

const ProjectsSlider: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white hide-arrows">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Student Projects"
          subtitle="See what our students have created and the skills they've developed through our programs."
          color="green"
        />

        <Slider
          items={projects}
          renderItem={(project: any, index: React.Key) => (
            <ProjectCard key={index} {...project} />
          )}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        />

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block py-3 px-8 bg-coducators-green text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
