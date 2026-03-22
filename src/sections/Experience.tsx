'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { experiences } from '@/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(52,211,153,0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(56,189,248,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="My Journey"
          title="Work Experience"
          description="A timeline of my professional growth, shipped products, and real-world impact"
        />

        <div className="mt-16 relative">
          {/* Left timeline rail */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300/40 via-sky-400/20 to-transparent" />

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
