'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceData } from '@/data/experiences';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import { twMerge } from 'tailwind-merge';

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const employmentTypeMeta: Record<string, { label: string; className: string }> = {
  'Full-time': { label: 'Full-time', className: 'bg-emerald-300/20 text-emerald-300 border border-emerald-300/30' },
  'Internship': { label: 'Internship', className: 'bg-sky-400/20 text-sky-400 border border-sky-400/30' },
  'Open Source': { label: 'Open Source', className: 'bg-violet-400/20 text-violet-400 border border-violet-400/30' },
};

export const ExperienceCard = ({ experience, index, isOpen, onToggle }: ExperienceCardProps) => {
  const typeMeta = employmentTypeMeta[experience.employmentType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex items-center justify-center">
        <div
          className={twMerge(
            'size-3.5 rounded-full border-2 z-10 relative',
            experience.isCurrentRole
              ? 'bg-emerald-300 border-emerald-300'
              : 'bg-gray-900 border-white/30'
          )}
        >
          {experience.isCurrentRole && (
            <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-75" />
          )}
        </div>
      </div>

      {/* Card */}
      <div
        className={twMerge(
          'rounded-2xl border bg-gray-800/60 backdrop-blur-sm overflow-hidden transition-all duration-300',
          experience.isCurrentRole
            ? 'border-emerald-300/40 shadow-[0_0_24px_0_rgba(52,211,153,0.12)]'
            : 'border-white/10'
        )}
      >
        {/* Clickable header */}
        <button
          onClick={() => onToggle()}
          className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 group"
          aria-expanded={isOpen}
        >
          <div className="flex-1 min-w-0">
            {/* Company + badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-serif text-lg md:text-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {experience.company}
              </h3>
              {experience.isCurrentRole && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-300 text-gray-900 px-2 py-0.5 rounded-full">
                  Present
                </span>
              )}
              <span className={twMerge('text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full', typeMeta.className)}>
                {typeMeta.label}
              </span>
            </div>

            {/* Role */}
            <div className="text-white font-medium text-sm md:text-base mb-1">
              {experience.role}
            </div>

            {/* Duration + Location */}
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-white/50 text-xs">
              <span>{experience.duration}</span>
              <span>{experience.location}</span>
            </div>

            {/* Tech pills always visible */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 text-white/70 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Chevron */}
          <div
            className={twMerge(
              'flex-shrink-0 mt-1 size-5 text-white/40 transition-transform duration-300 group-hover:text-white/60',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </button>

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-white/8 space-y-5">
                {/* Responsibilities */}
                <div className="pt-4">
                  <h4 className="text-white/50 text-[11px] uppercase tracking-widest font-semibold mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-sm text-white/75 leading-relaxed">
                        <CheckCircleIcon className="size-4 flex-shrink-0 mt-0.5 text-emerald-300/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {experience.achievements.length > 0 && (
                  <div>
                    <h4 className="text-white/50 text-[11px] uppercase tracking-widest font-semibold mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {experience.achievements.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-sm text-white/75 leading-relaxed">
                          <CheckCircleIcon className="size-4 flex-shrink-0 mt-0.5 text-sky-400/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
