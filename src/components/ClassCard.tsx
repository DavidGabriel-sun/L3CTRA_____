import React from 'react';
import { motion } from 'motion/react';
import { SesiLogo } from './SesiLogo';
import { LessonItem } from '../types';

interface ClassCardProps {
  lesson: LessonItem;
  index: number;
  onSelect: (lesson: LessonItem) => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ lesson, index, onSelect }) => {
  const getSubjBadges = () => {
    if (lesson.key === 'linguagens' || lesson.area === 'linguagens' || lesson.title === 'LINGUAGENS') {
      return ['Port', 'Ing', 'Art', 'Ed. Fís'];
    }
    if (lesson.key === 'natureza' || lesson.area === 'natureza' || lesson.title === 'NATUREZA') {
      return ['Bio', 'Fís', 'Quím'];
    }
    if (lesson.key === 'humanas' || lesson.area === 'humanas' || lesson.title.includes('HUMANAS')) {
      return ['Hist', 'Geo', 'Soc', 'Filo'];
    }
    return ['Mat'];
  };

  const getProfSubtitle = () => {
    if (lesson.key === 'matematica') return 'Prof. Vilson';
    if (lesson.key === 'linguagens' || lesson.title === 'LINGUAGENS') return 'Regina, Folks, Marcão e Iracema';
    if (lesson.key === 'natureza' || lesson.title === 'NATUREZA') return 'Camila, Rafael e Gabriela';
    if (lesson.key === 'humanas' || lesson.title.includes('HUMANAS')) return 'Matheus, Tatiana, Katia e Olivia';
    return lesson.professorName || lesson.professorRole;
  };

  const badges = getSubjBadges();

  return (
    <motion.div
      id={`card-${lesson.key}`}
      onClick={() => onSelect(lesson)}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ scale: 1.015, filter: 'brightness(1.04)' }}
      whileTap={{ scale: 0.985 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(lesson);
        }
      }}
      className={`relative w-full ${lesson.themeBg} text-white rounded-[26px] p-5 shadow-lg select-none cursor-pointer overflow-hidden flex flex-col justify-between min-h-[155px] sm:min-h-[165px] transition-shadow duration-200 focus:outline-none focus:ring-4 focus:ring-white/40`}
      style={{
        boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Background Large Play Triangle Icon */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32 transform translate-x-1"
          style={{
            fill: 'rgba(0, 0, 0, 0.15)',
          }}
        >
          <polygon points="28,15 85,50 28,85" rx="4" />
        </svg>
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex items-start justify-between">
        {/* Escola SESI Logo */}
        <SesiLogo size="md" />

        {/* Subject & Professor */}
        <div className="text-right flex flex-col items-end">
          <h2
            className="text-[21px] sm:text-[23px] font-extrabold tracking-wide uppercase leading-tight text-white drop-shadow-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {lesson.title}
          </h2>
          <span className="text-[13px] sm:text-[14px] font-medium text-white/95 leading-tight mt-0.5">
            {getProfSubtitle()}
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col justify-end pt-3">
        {/* Abbreviated subject pills on all cards */}
        <div className="flex items-center gap-1.5 flex-wrap mb-2">
          {badges.map((subj) => (
            <span
              key={subj}
              className="px-2.5 py-0.5 rounded-full bg-white/25 text-[11px] font-bold text-white shadow-2xs backdrop-blur-xs"
            >
              {subj}
            </span>
          ))}
        </div>

        {/* Aligned time, date and subject label for all cards */}
        <div className="flex items-end justify-between w-full">
          <div>
            <span className="text-[13px] sm:text-[14px] font-bold text-white block leading-tight">
              {lesson.duration || '45 Min.'}
            </span>
            <span className="text-[12px] sm:text-[12.5px] font-medium text-white/90 block mt-0.5 leading-tight">
              {lesson.date || '10 de set. de 2026'}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[12.5px] sm:text-[13px] font-medium text-white/90 block leading-tight lowercase">
              assunto
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
