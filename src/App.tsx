import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LESSONS_DATA, ALL_SUBJECT_LESSONS } from './data/lessonsData';
import { LessonItem } from './types';
import { PhoneFrame } from './components/PhoneFrame';
import { HomeScreen } from './components/HomeScreen';
import { AulasHojeScreen } from './components/AulasHojeScreen';
import { AulaLeituraScreen } from './components/AulaLeituraScreen';
import { GravacaoScreen } from './components/GravacaoScreen';
import { AlertsScreen } from './components/AlertsScreen';
import { PlanScreen, CalendarFilterMode } from './components/PlanScreen';
import { TasksScreen } from './components/TasksScreen';
import { SearchScreen } from './components/SearchScreen';
import { AuthScreens } from './components/AuthScreens';
import { LessonReplayView } from './components/LessonReplayView';
import { AppHeader, ScreenType } from './components/AppHeader';
import { MainNavTab } from './components/BottomNavigation';

export default function App() {
  const [lessons] = useState<LessonItem[]>(LESSONS_DATA);
  const [selectedLesson, setSelectedLesson] = useState<LessonItem>(
    LESSONS_DATA.find((l) => l.key === 'matematica') || LESSONS_DATA[3]
  );
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [previousScreen, setPreviousScreen] = useState<ScreenType>('home');
  const [isMockupView, setIsMockupView] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('10 de set. de 2026');
  const [calendarFilterMode, setCalendarFilterMode] = useState<CalendarFilterMode>('normal');

  // If date changes, update display for lessons
  const displayedLessons = lessons.map((l) => ({
    ...l,
    date: selectedDate,
  }));

  const navigateTo = (screen: ScreenType) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handleSelectLesson = (lesson: LessonItem) => {
    setSelectedLesson(lesson);
    navigateTo('leitura');
  };

  const handleNavigateFromAlert = (subjectKey: string) => {
    const found =
      ALL_SUBJECT_LESSONS.find((l) => l.key === subjectKey) ||
      displayedLessons.find((l) => l.key === subjectKey) ||
      displayedLessons[3];
    setSelectedLesson(found);
    navigateTo('leitura');
  };

  const handleOpenLectureFromRecording = (lectureTitle: string) => {
    setSelectedLesson({
      ...displayedLessons[3],
      topic: lectureTitle,
    });
    navigateTo('leitura');
  };

  const handleTabChange = (tab: MainNavTab) => {
    switch (tab) {
      case 'home':
        navigateTo('home');
        break;
      case 'plan':
        setCalendarFilterMode('normal');
        navigateTo('plan');
        break;
      case 'tasks':
        navigateTo('tasks');
        break;
      case 'alerts':
        navigateTo('alerts');
        break;
      case 'search':
        navigateTo('search');
        break;
    }
  };

  // Determine header color for lesson area (Ciências Humanas = blue, Natureza = green, Linguagens = orange, Matemática = red)
  const getAreaColor = (lesson?: LessonItem) => {
    if (!lesson) return '#2563EB';
    if (
      lesson.area === 'linguagens' ||
      lesson.key === 'linguagens' ||
      ['portugues', 'ingles', 'artes', 'ed_fisica'].includes(lesson.key) ||
      lesson.title === 'LINGUAGENS'
    ) {
      return '#F97316';
    }
    if (
      lesson.area === 'natureza' ||
      lesson.key === 'natureza' ||
      ['biologia', 'fisica', 'quimica'].includes(lesson.key) ||
      lesson.title === 'NATUREZA'
    ) {
      return '#22C55E';
    }
    if (
      lesson.area === 'humanas' ||
      lesson.key === 'humanas' ||
      ['geografia', 'historia', 'sociologia', 'filosofia'].includes(lesson.key) ||
      lesson.title.includes('HUMANAS')
    ) {
      return '#2563EB';
    }
    if (
      lesson.area === 'matematica' ||
      lesson.key === 'matematica' ||
      lesson.title.includes('MATEMÁTICA')
    ) {
      return '#EF4444';
    }
    return '#2563EB';
  };

  // Determine frame styling based on active screen
  const getFrameConfig = () => {
    switch (currentScreen) {
      case 'player':
        return {
          screenBg: 'bg-slate-900',
          statusBarTheme: 'light' as const,
          statusBarBg: '#0f172a',
        };
      case 'leitura': {
        const areaColor = getAreaColor(selectedLesson);
        return {
          screenBg: 'bg-white',
          statusBarTheme: 'light' as const,
          statusBarBg: areaColor,
        };
      }
      default:
        return {
          screenBg: 'bg-white',
          statusBarTheme: 'dark' as const,
          statusBarBg: undefined,
        };
    }
  };

  const frameConfig = getFrameConfig();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Top utility and screen switcher bar */}
      <AppHeader
        isMockupView={isMockupView}
        setIsMockupView={setIsMockupView}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        activeLessonTitle={selectedLesson?.title}
        currentScreen={currentScreen}
        onChangeScreen={(screen) => navigateTo(screen)}
        onGoHome={() => navigateTo('home')}
      />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 overflow-x-hidden">
        <PhoneFrame
          isMockupView={isMockupView}
          currentTime="9:41"
          screenBg={frameConfig.screenBg}
          statusBarTheme={frameConfig.statusBarTheme}
          statusBarBg={frameConfig.statusBarBg}
        >
          <AnimatePresence mode="wait">
            {/* 1. HOME SCREEN (With Interactive Card Stack as shown in reference video) */}
            {currentScreen === 'home' && (
              <HomeScreen
                key="home-screen"
                lessons={displayedLessons}
                onSelectLesson={handleSelectLesson}
                onOpenAulasHoje={() => navigateTo('aulas-hoje')}
                onOpenCalendarFilter={(mode) => {
                  setCalendarFilterMode(mode);
                  navigateTo('plan');
                }}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('alerts')}
              />
            )}

            {/* 1.1 DEDICATED AULAS DE HOJE SCREEN (Cards for the 4 Areas with Abbreviated Tags) */}
            {currentScreen === 'aulas-hoje' && (
              <AulasHojeScreen
                key="aulas-hoje-screen"
                lessons={displayedLessons}
                onSelectLesson={handleSelectLesson}
                onTabChange={handleTabChange}
                onBackToHome={() => navigateTo('home')}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 2. PLAN SCREEN (Calendar with Month / Last Week / This Week period views) */}
            {currentScreen === 'plan' && (
              <PlanScreen
                key={`plan-${calendarFilterMode}`}
                initialMode={calendarFilterMode}
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onBackToHome={() => navigateTo('home')}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 3. TASKS SCREEN (Tarefas) */}
            {currentScreen === 'tasks' && (
              <TasksScreen
                key="tasks-screen"
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 4. ALERTS SCREEN (Notificações) */}
            {currentScreen === 'alerts' && (
              <AlertsScreen
                key="alerts-screen"
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 5. SEARCH SCREEN (Clean Subject Names Only) */}
            {currentScreen === 'search' && (
              <SearchScreen
                key="search-screen"
                lessons={displayedLessons}
                onSelectLesson={handleSelectLesson}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 6. AULA LEITURA (With Aula Resumida & Versão Estendida, Underlined Bold, and All Area Tabs) */}
            {currentScreen === 'leitura' && (
              <AulaLeituraScreen
                key={`leitura-${selectedLesson.id}`}
                lesson={selectedLesson}
                onBack={() => navigateTo(previousScreen || 'home')}
                onOpenVideoPlayer={() => navigateTo('player')}
              />
            )}

            {/* 7. GRAVAÇÃO SCREEN (Lectra Voice Recorder) */}
            {currentScreen === 'gravacao' && (
              <GravacaoScreen
                key="gravacao-screen"
                onBack={() => navigateTo('home')}
                onOpenLecture={handleOpenLectureFromRecording}
              />
            )}

            {/* 8. AUTH SCREENS (Login & Signup) */}
            {currentScreen === 'auth' && (
              <AuthScreens
                key="auth-screens"
                onLoginSuccess={() => navigateTo('home')}
                onClose={() => navigateTo('home')}
              />
            )}

            {/* 9. VIDEO REPLAY PLAYER */}
            {currentScreen === 'player' && (
              <LessonReplayView
                key={`replay-${selectedLesson.id}`}
                lesson={selectedLesson}
                onBack={() => navigateTo('leitura')}
                onSelectOtherLesson={(l) => {
                  setSelectedLesson(l);
                  navigateTo('leitura');
                }}
                allLessons={displayedLessons}
              />
            )}
          </AnimatePresence>
        </PhoneFrame>
      </main>
    </div>
  );
}
