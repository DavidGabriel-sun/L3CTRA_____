import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LessonItem } from '../types';
import { SesiLogo } from './SesiLogo';

interface CardsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
}

export const CardsOverlay: React.FC<CardsOverlayProps> = ({
  isOpen,
  onClose,
  lessons,
  onSelectLesson,
}) => {
  // Order matching video 00:08: Green (Natureza), Orange (Linguagens), Red (Matemática), Blue (Humanas)
  const natLesson = lessons.find((l) => l.key === 'natureza') || lessons[1] || lessons[0];
  const lingLesson = lessons.find((l) => l.key === 'linguagens') || lessons[2] || lessons[0];
  const matLesson = lessons.find((l) => l.key === 'matematica') || lessons[3] || lessons[0];
  const humLesson = lessons.find((l) => l.key === 'humanas') || lessons[0];

  const orderedLessons: LessonItem[] = [natLesson, lingLesson, matLesson, humLesson].filter(
    (l, idx, arr) => l && arr.findIndex((x) => x?.key === l?.key) === idx
  );

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

  const handleCardClick = (lesson: LessonItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
    onSelectLesson(lesson);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="cards-screen-overlay"
          className="absolute inset-0 z-50 flex flex-col justify-end overflow-hidden"
        >
          {/* Fundo apenas meio embaçado (sem borda preta nem caixa escura) */}
          <motion.div
            id="cards-overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/25 backdrop-blur-md cursor-pointer"
          />

          {/* Container dos cards flutuando sobre o fundo embaçado (sem textos/cabeçalho em cima) */}
          <motion.div
            id="cards-overlay-container"
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '50%', opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 280,
              mass: 0.85,
            }}
            onClick={onClose}
            className="relative z-10 w-full h-full overflow-y-auto no-scrollbar px-5 pt-12 pb-6 flex flex-col justify-end gap-3.5 cursor-pointer"
          >
            {orderedLessons.map((lesson, idx) => {
              const badges = getSubjBadges(lesson);

              return (
                <motion.div
                  key={lesson.key}
                  id={`overlay-lesson-card-${lesson.key}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: idx * 0.05,
                    ease: 'easeOut',
                  }}
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => handleCardClick(lesson, e)}
                  className={`relative w-full ${lesson.themeBg} text-white rounded-[26px] p-5 shadow-2xl cursor-pointer overflow-hidden flex flex-col justify-between min-h-[160px] transition-all duration-200`}
                  style={{
                    boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  {/* Background Play Triangle */}
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

                  {/* Top Section: SESI Logo & Title */}
                  <div className="relative z-10 flex items-start justify-between">
                    <SesiLogo size="md" />
                    <div className="text-right flex flex-col items-end">
                      <h4
                        className="text-[21px] sm:text-[23px] font-black tracking-wide uppercase leading-tight text-white drop-shadow-sm"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {lesson.title}
                      </h4>
                      <span className="text-[13px] sm:text-[14px] font-medium text-white/95 leading-tight mt-0.5">
                        {getProfSubtitle(lesson)}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section: Badges, Duration, Date, Assunto */}
                  <div className="relative z-10 flex flex-col justify-end pt-3">
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

                    <div className="flex items-end justify-between w-full">
                      <div>
                        <span className="text-[13px] sm:text-[14px] font-bold text-white block leading-tight">
                          {lesson.duration || '45 Min.'}
                        </span>
                        <span className="text-[12px] sm:text-[12.5px] font-medium text-white/90 block mt-0.5 leading-tight">
                          {lesson.date || '26 de out. de 2026'}
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
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
