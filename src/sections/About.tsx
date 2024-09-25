import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarcIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import { TechIcon } from "@/components/TechIcon";
import Mumbai from "@/assets/images/Mumbai.jpg";
import SatishThumbsUp from "@/assets/images/Satish-Thumbs-Up.png";
import Naruto from "@/assets/animes/Naruto.jpg";
import DemonSlayer from "@/assets/animes/Demon Slayer.jpg";
import GrandBlue from "@/assets/animes/Grand Blue Dreaming.jpg";
import Haikyu from "@/assets/animes/Haikyuu.jpg";
import FireFly from "@/assets/animes/To the Forest of Firefly Lights.jpg";
import WeatheringWithYou from "@/assets/animes/Weathering With You.jpg";
import YourName from "@/assets/animes/Your Name.jpg";
import JJK from "@/assets/animes/JJK.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItem } from "@/components/ToolBoxItem";

const toolboxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "ReactJS", iconType: ReactIcon },
  { title: "NextJS", iconType: NextJSIcon },
  { title: "GitHub", iconType: GithubIcon },
];

const animeImages = [
  {
    name: "Your Name",
    src: YourName,
    imdbUrl: "https://www.imdb.com/title/tt5311514/",
  },
  {
    name: "Naruto",
    src: Naruto,
    imdbUrl: "https://www.imdb.com/title/tt0409591/",
  },
  {
    name: "Jujutsu Kaisen",
    src: JJK,
    imdbUrl: "https://www.imdb.com/title/tt12343534/",
  },
  {
    name: "Demon Slayer",
    src: DemonSlayer,
    imdbUrl: "https://www.imdb.com/title/tt9335498/",
  },
  {
    name: "Grand Blue",
    src: GrandBlue,
    imdbUrl: "https://www.imdb.com/title/tt8086718/",
  },
  {
    name: "Haikyu",
    src: Haikyu,
    imdbUrl: "https://www.imdb.com/title/tt3398540/",
  },
  {
    name: "To the Forest Of Firefly Lights",
    src: FireFly,
    imdbUrl: "https://www.imdb.com/title/tt2061702/",
  },
  {
    name: "Weathering With You",
    src: WeatheringWithYou,
    imdbUrl: "https://www.imdb.com/title/tt9426210/",
  },
];

const hobbies = [
  { title: "Sketching", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Chess", emoji: "♟️", left: "50%", top: "5%" },
  { title: "Photography", emoji: "📸", left: "10%", top: "35%" },
  { title: "Creating Content", emoji: "📽️", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎧", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🥋", left: "5%", top: "65%" },
  { title: "Videography", emoji: "🎞️", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am"
        />
        <div className="mt-20 flex flex-col gap-8">
          {/* <Card className="h-[320px]">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarcIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspectives</p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card> */}
          {/* My Recommendations Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="Recommendations"
                description=""
                className="mt-0"
              />
              {/* Scrollable Anime Cards */}
              <div className="overflow-x-auto flex space-x-4">
                {animeImages.map((anime) => (
                  <div key={anime.name} className="min-w-[150px] mt-2">
                    <a
                      href={anime.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={anime.src}
                        alt={anime.name}
                        // width={150}
                        // height={200}
                        className="rounded-lg"
                      />
                    </a>
                    {/* <p className="text-center mt-2 text-white">{anime.name}</p> */}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 ">
              <CardHeader
                title="My ToolBox"
                description="Explore the Technologies"
                className="px-6 pt-6"
              />
              <ToolBoxItem items={toolboxItems} className="mt-6" />
              <ToolBoxItem
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0  md:col-span-2 lg:col-span-1">
              <Image
                src={Mumbai}
                alt="Mumbai"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 md:mt-14">
                <Image
                  src={SatishThumbsUp}
                  alt="smiling Satish"
                  className="size-20 rounded-full md:size-28"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
