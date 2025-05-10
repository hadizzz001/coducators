import SectionHeading from "../ui/SectionHeading";
import Slider from "../common/Slider";

const platforms = [
  {
    id: 1,
    name: "Python",
    imageUrl: "/images/platforms/p1.png",
  },
  {
    id: 2,
    name: "Scratch",
    imageUrl: "/images/platforms/p2.png",
  },
  {
    id: 3,
    name: "JavaScript",
    imageUrl: "/images/platforms/p3.png",
  },
  {
    id: 4,
    name: "HTML5",
    imageUrl: "/images/platforms/p4.png",
  },
  {
    id: 5,
    name: "CSS3",
    imageUrl: "/images/platforms/p5.png",
  },
  {
    id: 6,
    name: "Minecraft Education",
    imageUrl: "/images/platforms/p6.png",
  },
  {
    id: 7,
    name: "App Inventor",
    imageUrl: "/images/platforms/p1.png",
  },
  {
    id: 8,
    name: "LEGO Mindstorms",
    imageUrl: "/images/platforms/p2.png",
  },
];

const Platforms: React.FC = () => {
  return (
    <section id="platforms" className="py-16  border-b border-gray-200">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technologies We Teach"
          subtitle="Our curriculum incorporates a variety of coding languages and platforms suitable for different ages and interests."
          color="blue"
          className="mb-8"
        />

        <Slider
          items={platforms}
          renderItem={(item: any, index: React.Key) => (
            <div className="p-6 shadow-md w-full grid place-items-center border  rounded-xl">
              <img src={item?.imageUrl} key={index} className="w-36 select-none" alt="image" />
            </div>
          )}
          slidesPerView={1.8}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        />
      </div>
    </section>
  );
};

export default Platforms;
