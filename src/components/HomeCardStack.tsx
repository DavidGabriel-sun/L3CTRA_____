import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { LessonItem } from '../types';
import { SesiLogo } from './SesiLogo';

interface HomeCardStackProps {
  lessons: LessonItem[];
  onOpenOverlay: () => void;
}

export const HomeCardStack: React.FC<HomeCardStackProps> = ({
  lessons,
  onOpenOverlay,
}) => {
  // Front lesson on Home screen: Matemática (Red), matching video 00:07
  const matLesson = lessons.find((l) => l.key === 'matematica') || lessons[3] || lessons[0];

  const getSubjBadges = (lesson: LessonItem) => {
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

  const getProfSubtitle = (lesson: LessonItem) => {
    if (lesson.key === 'matematica') return 'Professor';
    if (lesson.key === 'linguagens' || lesson.title === 'LINGUAGENS') return 'Professor';
    if (lesson.key === 'natureza' || lesson.title === 'NATUREZA') return 'Professor';
    if (lesson.key === 'humanas' || lesson.title.includes('HUMANAS')) return 'Professor';
    return lesson.professorRole || 'Professor';
  };

  return (
    <div className="w-full flex flex-col select-none">
      {/* Header with Title */}
      <div className="mb-2 px-0.5">
        <h2
          className="text-[22px] sm:text-[24px] font-black text-slate-950 tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Aulas de Hoje
        </h2>
      </div>

      {/* ================= COMPACT CARD STACK ON HOME SCREEN (Video 00:07) ================= */}
      <div className="relative w-full pt-6 pb-2">
        <div
          id="home-card-stack-trigger"
          onClick={onOpenOverlay}
          className="relative w-full cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="Aulas de Hoje: Toque no conjunto de cards para abrir"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenOverlay();
            }
          }}
        >
          {/* Peeking back layer: Green (Natureza) */}
          <div
            className="absolute -top-4 left-4 right-4 h-14 rounded-[24px] bg-[#22C55E] opacity-90 shadow-sm transition-all duration-300 group-hover:-top-5"
            style={{ zIndex: 10 }}
          />

          {/* Peeking middle layer: Orange (Linguagens) */}
          <div
            className="absolute -top-2 left-2 right-2 h-14 rounded-[24px] bg-[#F97316] opacity-95 shadow-md transition-all duration-300 group-hover:-top-3"
            style={{ zIndex: 15 }}
          />

          {/* Front Layer: Red Card (Matemática - Video 00:07) */}
          <motion.div
            id="home-front-card"
            whileHover={{ scale: 1.012, filter: 'brightness(1.02)' }}
            whileTap={{ scale: 0.985 }}
            className={`relative w-full ${matLesson.themeBg} text-white rounded-[26px] p-5 shadow-xl overflow-hidden flex flex-col justify-between min-h-[168px] transition-shadow duration-300`}
            style={{
              zIndex: 20,
              boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.32)',
            }}
          >
            {/* Background Large Play Triangle Icon (Video 00:07) */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32 transform translate-x-1"
                style={{ fill: 'rgba(0, 0, 0, 0.16)' }}
              >
                <polygon points="28,15 85,50 28,85" rx="4" />
              </svg>
            </div>

            {/* Top Section: SESI Logo & Subject Header */}
            <div className="relative z-10 flex items-start justify-between">
              <SesiLogo size="md" />
              <div className="text-right flex flex-col items-end">
                <h3
                  className="text-[21px] sm:text-[23px] font-black tracking-wide uppercase leading-tight text-white drop-shadow-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {matLesson.title}
                </h3>
                <span className="text-[13px] sm:text-[14px] font-medium text-white/95 leading-tight mt-0.5">
                  {getProfSubtitle(matLesson)}
                </span>
              </div>
            </div>

            {/* Bottom Section: Badges, Duration, Date, Assunto */}
            <div className="relative z-10 flex flex-col justify-end pt-4">
              <div className="flex items-center gap-1.5 flex-wrap mb-2">
                {getSubjBadges(matLesson).map((subj) => (
                  <span
                    key={subj}
                    className="px-2.5 py-0.5 rounded-full bg-white/25 text-[11px] font-bold text-white shadow-2xs backdrop-blur-xs"
                  >
                    {subj}
                  </span>
                ))}
              </div>

              <div className="flex items-end justify-between w-full">
                <div>
                  <span className="text-[13px] sm:text-[14px] font-bold text-white block leading-tight">
                    {matLesson.duration || '45 Min.'}
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] font-medium text-white/90 block mt-0.5 leading-tight">
                    {matLesson.date || '26 de out. de 2026'}
                  </span>
                </div>

                <div className="text-right flex items-center gap-1">
                  <span className="text-[12.5px] sm:text-[13px] font-medium text-white/90 block leading-tight lowercase">
                    assunto
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action micro-hint */}
        <div className="flex items-center justify-center gap-1.5 pt-2.5 text-[11.5px] font-medium text-slate-500">
          <span>Toque no conjunto para abrir as aulas</span>
        </div>
      </div>
    </div>
  );
};
