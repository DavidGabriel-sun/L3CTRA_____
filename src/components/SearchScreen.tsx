import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, BookOpen } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';
import { LessonItem } from '../types';
import { ALL_SUBJECT_LESSONS, FACULTY_DIRECTORY } from '../data/lessonsData';

interface SearchScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  onSelectLesson,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 12 unique subjects mapped cleanly without professors or topics
  const disciplines = FACULTY_DIRECTORY.map((fac) => {
    const lesson = ALL_SUBJECT_LESSONS.find((l) => l.key === fac.subjectKey);
    return {
      key: fac.subjectKey,
      name: fac.subjectName,
      areaName: fac.areaName,
      themeBg: fac.themeBg,
      accentColor: fac.accentColor,
      lesson: lesson || ALL_SUBJECT_LESSONS[0],
    };
  });

  const term = searchTerm.toLowerCase().trim();

  const filteredDisciplines = term
    ? disciplines.filter(
        (d) =>
          d.name.toLowerCase().includes(term) ||
          d.areaName.toLowerCase().includes(term)
      )
    : disciplines;

  const quickSubjects = [
    'Português',
    'Inglês',
    'Artes',
    'Ed. Física',
    'Matemática',
    'História',
    'Geografia',
    'Sociologia',
    'Filosofia',
    'Biologia',
    'Física',
    'Química',
  ];

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
      id="screen-search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Bar with Back navigation to Home */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        isBackOption={true}
        onBack={() => onTabChange('home')}
        theme="dark"
      />

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        <h1
          className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight mb-2.5"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Pesquisar
        </h1>

        {/* Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar matéria..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200/80 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* Quick Category Chips with Subject Names Only */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-3">
          {quickSubjects.map((subj, i) => (
            <button
              key={i}
              onClick={() => setSearchTerm(subj === searchTerm ? '' : subj)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1 ${
                searchTerm.toLowerCase() === subj.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>{subj}</span>
            </button>
          ))}
        </div>

        {/* Clean Results List - Shows ONLY the name of the subject as requested */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
              {searchTerm ? `Matérias (${filteredDisciplines.length})` : 'Matérias Escola SESI'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {filteredDisciplines.map((item) => (
              <div
                key={item.key}
                onClick={() => onSelectLesson(item.lesson)}
                className="p-3.5 bg-slate-50 hover:bg-slate-100/90 active:scale-[0.99] rounded-2xl border border-slate-200/70 flex items-center justify-between cursor-pointer transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.themeBg} flex items-center justify-center text-white font-black text-[12px] shadow-xs shrink-0`}
                  >
                    {getAbbr(item.name)}
                  </div>
                  <div>
                    <h3
                      className="text-[15px] font-bold text-slate-950 leading-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      {item.areaName}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 stroke-[2.2] shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="search" onTabChange={onTabChange} />
    </motion.div>
  );
};
