import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';
import { HomeCardStack } from './HomeCardStack';
import { CardsOverlay } from './CardsOverlay';
import { LessonItem } from '../types';

interface HomeScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
  onOpenAulasHoje?: () => void;
  onOpenCalendarFilter: (filter: 'this-month' | 'last-week' | 'this-week') => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  lessons,
  onSelectLesson,
  onOpenCalendarFilter,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [isCardsOverlayOpen, setIsCardsOverlayOpen] = useState<boolean>(false);

  return (
    <motion.div
      id="screen-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar (Avatar + Mais opções) */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        isBackOption={false}
        theme="dark"
      />

      {/* Scrollable Center Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* "Tarefas Atrasadas" Banner Card (Video 00:07) */}
        <div
          id="banner-tarefas-atrasadas"
          onClick={() => onTabChange('tasks')}
          className="w-full bg-[#ECEEF2] rounded-3xl p-1.5 flex items-center justify-between mb-3 cursor-pointer shadow-2xs hover:brightness-[0.98] transition-all"
        >
          {/* Left Red Gradient Badge */}
          <div
            className="rounded-2xl px-4 py-3 text-white flex flex-col justify-center leading-tight shadow-sm"
            style={{
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
            }}
          >
            <span
              className="text-[17px] sm:text-[18px] font-black tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Tarefas
            </span>
            <span
              className="text-[17px] sm:text-[18px] font-black tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Atrasadas
            </span>
          </div>

          {/* Right Giant Red Number "02" */}
          <div className="pr-6 flex items-center justify-center">
            <span
              className="text-[44px] sm:text-[48px] font-black tracking-tighter text-[#EF4444] leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              02
            </span>
          </div>
        </div>

        {/* 3 Pills: This Month, Last Week, This Week */}
        <div className="flex flex-col gap-2 mb-4">
          <button
            id="btn-filter-this-month"
            onClick={() => onOpenCalendarFilter('this-month')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">This Month</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>

          <button
            id="btn-filter-last-week"
            onClick={() => onOpenCalendarFilter('last-week')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">Last Week</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>

          <button
            id="btn-filter-this-week"
            onClick={() => onOpenCalendarFilter('this-week')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">This Week</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>
        </div>

        {/* Aulas de Hoje Interactive Cards Stack (Video 00:07 - 00:08) */}
        <div className="pt-2">
          <HomeCardStack
            lessons={lessons}
            onOpenOverlay={() => setIsCardsOverlayOpen(true)}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" onTabChange={onTabChange} />

      {/* Full Screen / Bottom Sheet Cards Overlay (Video 00:08) */}
      <CardsOverlay
        isOpen={isCardsOverlayOpen}
        onClose={() => setIsCardsOverlayOpen(false)}
        lessons={lessons}
        onSelectLesson={onSelectLesson}
      />
    </motion.div>
  );
};
