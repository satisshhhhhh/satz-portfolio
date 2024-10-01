'use client';
import { useState } from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import SatishThumbsUp from "@/assets/images/Satish-Thumbs-Up.png";
import Satz from "@/assets/images/Satz.png";
import SatishWithMic from "@/assets/images/SatishWithMic.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  const email = "satishpanchal651@gmail.com";
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-100" />
        </HeroOrbit>
        <HeroOrbit size={660} rotation={-28}>
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={660} rotation={158}>
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={SatishWithMic}
            className="size-[100px]"
            alt="person peeping"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {"I break and make things with JavaScript."}
          </p>
          <p className="text-center text-white/60 md:text-lg">
            {"Let's discuss your next project"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <a href="#projects" className="font-semibold">Explore My Work</a>
            <ArrowDown className="size-4" />
          </button>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative"
          >
            <span>👋</span>
            <span className="font-semibold">
              {hovered ? "Click to Copy Mail To Clipboard 📋" : copied ? "✅ Mail Copied!" : "Let's Connect"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
