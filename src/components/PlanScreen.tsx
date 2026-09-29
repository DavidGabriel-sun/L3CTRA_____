import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';

export type CalendarFilterMode = 'this-month' | 'last-week' | 'this-week' | 'normal';

interface PlanScreenProps {
  onNavigateToLecture: (subjectKey: string) => void;
  onTabChange: (tab: MainNavTab) => void;
  initialMode?: CalendarFilterMode;
  onBackToHome?: () => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const PlanScreen: React.FC<PlanScreenProps> = ({
  onNavigateToLecture,
  onTabChange,
  initialMode = 'normal',
  onBackToHome,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [filterMode, setFilterMode] = useState<CalendarFilterMode>(initialMode);
  const [selectedDay, setSelectedDay] = useState<number>(
    initialMode === 'this-week' ? 10 : initialMode === 'this-month' ? 28 : initialMode === 'last-week' ? 2 : 10
  );

  const weekdays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  // August 2026 (Mês Passado: 31 days, starts on Saturday -> 6 blanks: Dom, Seg, Ter, Qua, Qui, Sex)
  const augustBlanks = [null, null, null, null, null, null];
  const daysInAugust = Array.from({ length: 31 }, (_, i) => i + 1);

  // September 2026 (Mês Atual: 30 days, starts on Tuesday -> 2 blanks: Dom, Seg)
  const septBlanks = [null, null];
  const daysInSept = Array.from({ length: 30 }, (_, i) => i + 1);

  // Last week days: 31 Ago - 06 Set 2026
  const lastWeekDays = [
    { day: 31, month: 'Ago', weekday: 'SEG', status: 'completed', label: 'Entrega Humanas' },
    { day: 1, month: 'Set', weekday: 'TER', status: 'completed', label: 'Simulado Diagnóstico' },
    { day: 2, month: 'Set', weekday: 'QUA', status: 'completed', label: 'Revisão Matemática' },
    { day: 3, month: 'Set', weekday: 'QUI', status: 'completed', label: 'Aula Prática Natureza' },
    { day: 4, month: 'Set', weekday: 'SEX', status: 'completed', label: 'Plantão de Redação' },
    { day: 5, month: 'Set', weekday: 'SÁB', status: 'neutral', label: 'Estudo Autônomo' },
    { day: 6, month: 'Set', weekday: 'DOM', status: 'neutral', label: 'Descanso' },
  ];

  // This week days: 07 Set - 13 Set 2026 (Hoje = 10 de setembro)
  const thisWeekDays = [
    { day: 7, month: 'Set', weekday: 'SEG', status: 'completed', label: 'Feriado Independência' },
    { day: 8, month: 'Set', weekday: 'TER', status: 'completed', label: 'Módulo 7 Inglês' },
    { day: 9, month: 'Set', weekday: 'QUA', status: 'completed', label: 'Termodinâmica Física' },
    { day: 10, month: 'Set', weekday: 'QUI', status: 'today', label: 'Aulas de Hoje (4 Áreas)', isToday: true },
    { day: 11, month: 'Set', weekday: 'SEX', status: 'due', label: 'Prazo: Lista de Matemática' },
    { day: 12, month: 'Set', weekday: 'SÁB', status: 'due', label: 'Revisão Sociologia' },
    { day: 13, month: 'Set', weekday: 'DOM', status: 'neutral', label: 'Planejamento Semanal' },
  ];

  const eventsDataAugust: { [key: number]: { color: string; label: string; subject: string; key: string } } = {
    14: { color: 'bg-blue-600', label: 'Seminário de História (Segundo Reinado)', subject: 'Humanas', key: 'historia' },
    21: { color: 'bg-emerald-600', label: 'Relatório de Fisiologia Digestória', subject: 'Natureza', key: 'biologia' },
    28: { color: 'bg-red-600', label: 'Simulado de Matemática (Relações Métricas)', subject: 'Matemática', key: 'matematica' },
  };

  const eventsDataSeptember: { [key: number]: { color: string; label: string; subject: string; key: string } } = {
    4: { color: 'bg-orange-600', label: 'Redação: Coesão e Concordância Verbal', subject: 'Linguagens', key: 'portugues' },
    10: { color: 'bg-red-600', label: 'Hoje: 4 Aulas Regulares do SESI', subject: 'Matemática & Áreas', key: 'matematica' },
    18: { color: 'bg-blue-600', label: 'Avaliação de Geografia e População', subject: 'Humanas', key: 'geografia' },
    25: { color: 'bg-emerald-600', label: 'Termodinâmica e Leis dos Gases', subject: 'Natureza', key: 'fisica' },
  };

  const handleBack = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      onTabChange('home');
    }
  };

  return (
    <motion.div
      id="screen-plan"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar with Avatar and Back button */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        isBackOption={true}
        onBack={handleBack}
        theme="dark"
      />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* Title */}
        <div className="flex items-baseline justify-between mb-2">
          <h1
            className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {filterMode === 'this-month'
              ? 'Agosto 2026'
              : filterMode === 'last-week'
              ? 'Semana Passada'
              : filterMode === 'this-week'
              ? 'Esta Semana'
              : 'Cronograma SESI'}
          </h1>

          <span className="text-[11.5px] font-bold text-slate-500">
            Hoje: 10 de Set.
          </span>
        </div>

        {/* Period Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-3 bg-[#F0F2F6] p-1 rounded-2xl shrink-0">
          <button
            onClick={() => {
              setFilterMode('this-month');
              setSelectedDay(28);
            }}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterMode === 'this-month'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mês Passado (Ago)
          </button>

          <button
            onClick={() => {
              setFilterMode('last-week');
              setSelectedDay(2);
            }}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterMode === 'last-week'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semana Passada
          </button>

          <button
            onClick={() => {
              setFilterMode('this-week');
              setSelectedDay(10);
            }}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterMode === 'this-week'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Esta Semana (Hoje)
          </button>

          <button
            onClick={() => {
              setFilterMode('normal');
              setSelectedDay(10);
            }}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterMode === 'normal'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mês Atual (Set)
          </button>
        </div>

        {/* View 1: THIS-MONTH (Agosto 2026 - Mês Passado) */}
        {filterMode === 'this-month' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-slate-800">
                Agosto de 2026 (Mês Passado)
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                3 eventos registrados
              </span>
            </div>

            <div className="grid grid-cols-7 text-center mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {weekdays.map((w) => (
                <div key={w} className="py-1">
                  {w}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center gap-y-1 text-[13px] font-semibold text-slate-800">
              {augustBlanks.map((_, idx) => (
                <div key={`blank-${idx}`} className="h-8" />
              ))}

              {daysInAugust.map((day) => {
                const event = eventsDataAugust[day];
                const isSelected = selectedDay === day;

                let badge = 'text-slate-700 hover:bg-slate-100';
                if (event) {
                  badge = isSelected
                    ? 'bg-red-600 text-white font-bold ring-2 ring-red-400 ring-offset-1'
                    : 'bg-red-50 text-red-600 font-bold border border-red-200';
                } else if (isSelected) {
                  badge = 'bg-slate-900 text-white font-bold';
                }

                return (
                  <button
                    key={`aug-${day}`}
                    onClick={() => setSelectedDay(day)}
                    className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center transition-all cursor-pointer ${badge}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2: LAST-WEEK (31 Ago - 06 Set 2026) */}
        {filterMode === 'last-week' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-slate-800">
                Semana Passada (31 Ago a 06 Set)
              </span>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Concluída
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {lastWeekDays.map((d) => {
                const isSelected = selectedDay === d.day;
                return (
                  <button
                    key={d.day}
                    onClick={() => setSelectedDay(d.day)}
                    className={`p-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900 scale-[1.03]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-bold opacity-75">{d.weekday}</span>
                    <span className="text-[15px] font-black">{d.day}</span>
                    <span className="text-[8px] uppercase font-bold text-emerald-500 mt-0.5">
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* View 3: THIS-WEEK (07 Set - 13 Set 2026) */}
        {filterMode === 'this-week' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-slate-800">
                Esta Semana (07 Set a 13 Set)
              </span>
              <span className="text-[11px] font-bold text-red-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Hoje é dia 10
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {thisWeekDays.map((d) => {
                const isSelected = selectedDay === d.day;
                return (
                  <button
                    key={d.day}
                    onClick={() => setSelectedDay(d.day)}
                    className={`p-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                      d.isToday
                        ? 'bg-red-600 text-white font-bold shadow-md ring-2 ring-red-300 ring-offset-1 scale-[1.06]'
                        : isSelected
                        ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-bold opacity-80">{d.weekday}</span>
                    <span className="text-[15px] font-black">{d.day}</span>
                    {d.isToday ? (
                      <span className="text-[8px] uppercase font-bold tracking-tight bg-white text-red-600 px-1 rounded-sm mt-0.5">
                        HOJE
                      </span>
                    ) : (
                      <span className="text-[9px] text-slate-400 mt-0.5">•</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* View 4: NORMAL (Setembro 2026) */}
        {filterMode === 'normal' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-slate-800">
                Setembro de 2026 (Mês Atual)
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                Dia 10 Selecionado
              </span>
            </div>

            <div className="grid grid-cols-7 text-center mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {weekdays.map((w) => (
                <div key={w} className="py-1">
                  {w}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center gap-y-1 text-[13px] font-semibold text-slate-800">
              {septBlanks.map((_, idx) => (
                <div key={`blank-${idx}`} className="h-8" />
              ))}

              {daysInSept.map((day) => {
                const event = eventsDataSeptember[day];
                const isSelected = selectedDay === day;
                const isToday = day === 10;

                let badge = 'text-slate-700 hover:bg-slate-100';
                if (isToday) {
                  badge = 'bg-red-600 text-white font-bold ring-2 ring-red-400 ring-offset-1';
                } else if (event) {
                  badge = isSelected
                    ? 'bg-blue-600 text-white font-bold ring-2 ring-blue-400 ring-offset-1'
                    : 'bg-blue-50 text-blue-600 font-bold border border-blue-200';
                } else if (isSelected) {
                  badge = 'bg-slate-900 text-white font-bold';
                }

                return (
                  <button
                    key={`sept-${day}`}
                    onClick={() => setSelectedDay(day)}
                    className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center transition-all cursor-pointer ${badge}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Day Agenda Cards (Video 00:14) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-black uppercase tracking-wider text-slate-400">
              Atividades Registradas para o Período
            </h3>
            <span className="text-[11.5px] font-bold text-slate-700">
              Dia {selectedDay}
            </span>
          </div>

          {/* Card 1: Math Lecture Card */}
          <div
            id="plan-card-math-today"
            className="w-full bg-[#EA3829] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {selectedDay === 10 ? 'Hoje: Aula e Relações Métricas' : `Entrega do Dia ${selectedDay}`}
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95">
                  Prof. Vilson
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] font-medium text-white/95">
                <span className="max-w-[70%] leading-tight">
                  Matemática: Teorema de Pitágoras, Leis dos Senos e Cossenos
                </span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[12px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('matematica')}
              className="w-full bg-[#B81F14] hover:bg-[#A3170E] py-1.5 px-4 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Acessar Aula de Matemática</span>
              <span className="text-[8px]">▶</span>
            </button>
          </div>

          {/* Card 2: Humanities Card */}
          <div
            id="plan-card-humanities"
            className="w-full bg-[#007AFF] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Ciências Humanas: História e Sociedade
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95 shrink-0 ml-2">
                  Profa. Tatiana
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-medium text-white/95 mt-1">
                <span>Período Regencial e Segundo Reinado no Brasil</span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[12px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('historia')}
              className="w-full bg-[#0060C9] hover:bg-[#0051AB] py-1.5 px-4 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Acessar Aula de História</span>
              <span className="text-[8px]">▶</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="plan" onTabChange={onTabChange} />
    </motion.div>
  );
};
