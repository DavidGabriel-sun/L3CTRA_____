import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, GraduationCap, Users, BookOpen } from 'lucide-react';
import { LessonItem, AreaKey } from '../types';
import { ClassCard } from './ClassCard';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';
import { FACULTY_DIRECTORY, ALL_SUBJECT_LESSONS } from '../data/lessonsData';

interface AulasHojeScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
  onTabChange: (tab: MainNavTab) => void;
  onBackToHome: () => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const AulasHojeScreen: React.FC<AulasHojeScreenProps> = ({
  lessons,
  onSelectLesson,
  onTabChange,
  onBackToHome,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [activeView, setActiveView] = useState<'aulas' | 'materias'>('aulas');
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<AreaKey | 'todas'>('todas');

  const areas: { id: AreaKey | 'todas'; label: string; color: string }[] = [
    { id: 'todas', label: 'Todas (12)', color: 'bg-slate-800 text-white' },
    { id: 'humanas', label: 'Humanas (4)', color: 'bg-blue-600 text-white' },
    { id: 'linguagens', label: 'Linguagens (4)', color: 'bg-orange-600 text-white' },
    { id: 'natureza', label: 'Natureza (3)', color: 'bg-emerald-600 text-white' },
    { id: 'matematica', label: 'Matemática (1)', color: 'bg-red-600 text-white' },
  ];

  const filteredFaculty =
    selectedAreaFilter === 'todas'
      ? FACULTY_DIRECTORY
      : FACULTY_DIRECTORY.filter((f) => f.area === selectedAreaFilter);

  const handleOpenSubjectByFaculty = (subjectKey: string) => {
    const lesson = ALL_SUBJECT_LESSONS.find((l) => l.key === subjectKey);
    if (lesson) {
      onSelectLesson(lesson);
    }
  };

  const getAbbr = (name: string) => {
    if (name.startsWith('Port')) return 'Port';
    if (name.startsWith('Ing')) return 'Ing';
    if (name.startsWith('Art')) return 'Art';
    if (name.startsWith('Ed')) return 'Ed. Fís';
    if (name.startsWith('Mat')) return 'Mat';
    if (name.startsWith('Geo')) return 'Geo';
    if (name.startsWith('Hist')) return 'Hist';
    if (name.startsWith('Soc')) return 'Soc';
    if (name.startsWith('Filo')) return 'Filo';
    if (name.startsWith('Bio')) return 'Bio';
    if (name.startsWith('Fís')) return 'Fís';
    if (name.startsWith('Quím')) return 'Quím';
    return name.slice(0, 3);
  };

  return (
    <motion.div
      id="screen-aulas-hoje"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar with Avatar and Back button instead of more options */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        isBackOption={true}
        onBack={onBackToHome}
        theme="dark"
      />

      {/* Scrollable Center Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-2.5">
          <div>
            <h1
              className="text-[25px] sm:text-[27px] font-black text-slate-950 tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Aulas de Hoje
            </h1>
            <span className="text-[12px] font-medium text-slate-500">
              Quinta-feira • 10 de set. de 2026
            </span>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">
            4 Áreas SESI
          </span>
        </div>

        {/* View Switcher: Aulas de Hoje vs. Matérias & Professores */}
        <div className="flex items-center justify-between mb-3 bg-[#F0F2F6] p-1 rounded-2xl">
          <button
            onClick={() => setActiveView('aulas')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeView === 'aulas'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cards das Áreas</span>
          </button>
          <button
            onClick={() => setActiveView('materias')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeView === 'materias'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Matérias & Professores</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeView === 'aulas' ? (
            <motion.div
              key="view-aulas"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-3"
            >
              {/* Classes Stack / Cards with Abbreviated Tags and Aligned Time */}
              {lessons.map((lesson, index) => (
                <ClassCard
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                  onSelect={onSelectLesson}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="view-materias"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col"
            >
              {/* Filter Chips by Area */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-2">
                {areas.map((a) => {
                  const isSelected = selectedAreaFilter === a.id;
                  return (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAreaFilter(a.id)}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? `${a.color} shadow-xs scale-[1.02]`
                          : 'bg-[#ECEEF2] text-slate-700 hover:bg-[#E2E5EB]'
                      }`}
                    >
                      {a.label}
                    </button>
                  );
                })}
              </div>

              {/* List of Subjects and Faculty */}
              <div className="flex flex-col gap-2">
                {filteredFaculty.map((fac) => (
                  <div
                    key={fac.subjectKey}
                    onClick={() => handleOpenSubjectByFaculty(fac.subjectKey)}
                    className="p-3 rounded-2xl bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between border border-slate-200/60 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl ${fac.themeBg} flex items-center justify-center text-white font-black text-[11px] shadow-xs shrink-0`}
                      >
                        {getAbbr(fac.subjectName)}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[14px] font-black text-slate-900 leading-tight">
                            {fac.subjectName}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                            • {fac.areaName}
                          </span>
                        </div>
                        <span className="text-[12px] font-bold text-blue-700 leading-tight mt-0.5 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>{fac.professorName}</span>
                        </span>
                        <span className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
                          {fac.description}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 stroke-[2.2] shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" onTabChange={onTabChange} />
    </motion.div>
  );
};
