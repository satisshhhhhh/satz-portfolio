// import TheWallsImage from "@/assets/images/TheWallsAllTime.jpg";
import TheWallsImage from "@/assets/images/TheWallsImage.png";
import FitnessFactoryImage from "@/assets/images/FitnessFactoryImage-1.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const portfolioProjects = [
  {
    title: "The Walls",
    results: [
      {
        title:
          "Imagine Spotify meets Pinterest for music lovers, it's a social haven for audiophiles.",
      },
      {
        title:
          "A platform that seamlessly integrates with Spotify to provide users with an innovative way to curate and share their musical journey and their most loved tracks",
      },
      { title: "Gained 10k page views in a week." },
    ],
    link: "https://thewalls.vercel.app/",
    image: TheWallsImage,
    tags: ["React", "Next.js", "Firebase", "Tailwind", "SpotifyAPI"],
  },
  {
    title: "Fitness Factory",
    results: [
      {
        title:
          "Fitness Application that helps users discover and learn exercises, with a focus on ease of use and accessibility.",
      },
      {
        title:
          "Incorporated YouTube videos that demonstrate exercises and target specific muscle groups",
      },
      { title: "A well-rounded solution that combines information, visualization, and user engagement." },
    ],
    link: "https://github.com/satisshhhhhh/FitnessFactory",
    image: FitnessFactoryImage,
    tags: ["React", "Rapid API", "Material UI"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging visual experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="px-8 pt-5 md:pt-12 md:px-10 lg:pt-16 lg:px-20 bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-serif text-2xl md:text-4xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" className="mr-3">
                      <button className="font-semibold inline-flex">
                        <span>Live</span>
                        <ArrowUpRightIcon />
                      </button>
                    </a>
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="text-sm md:text-base text-white/80 flex gap-2 items-start"
                      >
                        <CheckCircleIcon className="size-5 flex-shrink-0 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="flex flex-wrap mt-4 gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <li
                    className="bg-white/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:text-black/70 dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul> */}
                  <ul className="flex flex-wrap mt-4 gap-2 mt-5">
                    {project.tags.map((tag, index) => (
                      <li
                        className="bg-emerald-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:text-black/80 dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 -mb-4 md:mb-0 lg:mt-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg lg:absolute lg:h-full lg:w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
