import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  Volume2,
  VolumeX,
  Heart,
  Mic,
  Send,
  MessageCircle,
  GraduationCap,
  FileText,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { LessonItem, AreaKey } from '../types';
import { ALL_SUBJECT_LESSONS } from '../data/lessonsData';

interface AulaLeituraScreenProps {
  lesson: LessonItem;
  onBack: () => void;
  onOpenVideoPlayer?: () => void; // kept optional for prop compatibility
}

interface CommentItem {
  id: string;
  author: string;
  handle: string;
  timeAgo: string;
  text: string;
  avatarColor: string;
  likes: number;
  isLiked?: boolean;
}

interface AreaDiscipline {
  key: string;
  abbr: string;
  name: string;
  prof: string;
}

export const AulaLeituraScreen: React.FC<AulaLeituraScreenProps> = ({
  lesson,
  onBack,
}) => {
  // Determine current area from lesson
  const determineArea = (): AreaKey => {
    if (lesson.area) return lesson.area;
    if (
      lesson.key === 'linguagens' ||
      ['portugues', 'ingles', 'artes', 'ed_fisica'].includes(lesson.key) ||
      lesson.title === 'LINGUAGENS'
    ) {
      return 'linguagens';
    }
    if (
      lesson.key === 'humanas' ||
      ['geografia', 'historia', 'sociologia', 'filosofia'].includes(lesson.key) ||
      lesson.title.includes('HUMANAS')
    ) {
      return 'humanas';
    }
    if (
      lesson.key === 'natureza' ||
      ['biologia', 'fisica', 'quimica'].includes(lesson.key) ||
      lesson.title === 'NATUREZA'
    ) {
      return 'natureza';
    }
    return 'matematica';
  };

  const currentArea = determineArea();

  // Discipline mappings for each area with abbreviated names as requested
  const areaDisciplinesMap: Record<AreaKey, AreaDiscipline[]> = {
    linguagens: [
      { key: 'portugues', abbr: 'Port', name: 'Português', prof: 'Profa. Regina' },
      { key: 'ingles', abbr: 'Ing', name: 'Inglês', prof: 'Prof. Folks' },
      { key: 'artes', abbr: 'Art', name: 'Artes', prof: 'Prof. Marcão' },
      { key: 'ed_fisica', abbr: 'Ed. Fís', name: 'Ed. Física', prof: 'Profa. Iracema' },
    ],
    humanas: [
      { key: 'geografia', abbr: 'Geo', name: 'Geografia', prof: 'Prof. Matheus' },
      { key: 'historia', abbr: 'Hist', name: 'História', prof: 'Profa. Tatiana' },
      { key: 'sociologia', abbr: 'Soc', name: 'Sociologia', prof: 'Profa. Katia' },
      { key: 'filosofia', abbr: 'Filo', name: 'Filosofia', prof: 'Profa. Olivia' },
    ],
    natureza: [
      { key: 'biologia', abbr: 'Bio', name: 'Biologia', prof: 'Profa. Camila' },
      { key: 'fisica', abbr: 'Fís', name: 'Física', prof: 'Prof. Rafael' },
      { key: 'quimica', abbr: 'Quím', name: 'Química', prof: 'Profa. Gabriela' },
    ],
    matematica: [
      { key: 'matematica', abbr: 'Mat', name: 'Matemática', prof: 'Prof. Vilson' },
    ],
  };

  const currentAreaDisciplines = areaDisciplinesMap[currentArea] || [
    { key: lesson.key, abbr: lesson.title.slice(0, 3), name: lesson.title, prof: lesson.professorName },
  ];

  // Selected discipline within this area
  const getInitialDiscipline = () => {
    const matching = currentAreaDisciplines.find((d) => d.key === lesson.key);
    if (matching) return matching.key;
    return currentAreaDisciplines[0].key;
  };

  const [selectedDisciplineKey, setSelectedDisciplineKey] = useState<string>(getInitialDiscipline());

  // Sub-tab inside card: "resumo" (Aula Resumida) vs "estendida" (Versão Estendida)
  const [cardTab, setCardTab] = useState<'resumo' | 'estendida'>('resumo');

  // Find corresponding lesson object
  const currentDisciplineLesson =
    ALL_SUBJECT_LESSONS.find((l) => l.key === selectedDisciplineKey) || lesson;

  const [isReadingSpeech, setIsReadingSpeech] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: '1',
      author: 'Dan',
      handle: '@danilo_coelho09',
      timeAgo: '2h',
      text: 'Professor, esse conteúdo cai direto na avaliação diagnóstica do SESI?',
      avatarColor: 'bg-rose-500',
      likes: 2,
    },
    {
      id: '2',
      author: 'TH0',
      handle: '@tiago_corrt',
      timeAgo: '15min',
      text: 'A lista de exercícios com resolução passo a passo já está disponível no app?',
      avatarColor: 'bg-red-600',
      likes: 1,
    },
  ]);

  const quickSuggestions = ['Pode', 'posso', 'ponto', 'dúvida'];

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    if (isReadingSpeech) {
      window.speechSynthesis.cancel();
      setIsReadingSpeech(false);
    } else {
      const textToRead = `${currentDisciplineLesson.title}. ${currentDisciplineLesson.topic}. ${currentDisciplineLesson.description}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'pt-BR';
      utterance.onend = () => setIsReadingSpeech(false);
      utterance.onerror = () => setIsReadingSpeech(false);
      window.speechSynthesis.speak(utterance);
      setIsReadingSpeech(true);
    }
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              likes: c.isLiked ? c.likes - 1 : c.likes + 1,
              isLiked: !c.isLiked,
            }
          : c
      )
    );
  };

  const handleSendComment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newCommentText.trim()) return;

    const newC: CommentItem = {
      id: Date.now().toString(),
      author: 'Você',
      handle: '@aluno.sesi',
      timeAgo: 'agora',
      text: newCommentText.trim(),
      avatarColor: 'bg-blue-600',
      likes: 0,
    };

    setComments([...comments, newC]);
    setNewCommentText('');
  };

  const handleChipClick = (chip: string) => {
    setNewCommentText((prev) => (prev ? `${prev} ${chip}` : chip));
  };

  // Header background color based on active area / lesson
  const getHeaderBgColor = () => {
    if (currentArea === 'linguagens') return '#F97316';
    if (currentArea === 'natureza') return '#22C55E';
    if (currentArea === 'humanas') return '#2563EB';
    return '#EF4444'; // Matematica
  };

  const headerBgColor = getHeaderBgColor();

  const getAreaDisplayTitle = () => {
    if (currentArea === 'linguagens') return 'LINGUAGENS';
    if (currentArea === 'humanas') return 'CIÊNCIAS HUMANAS';
    if (currentArea === 'natureza') return 'CIÊNCIAS DA NATUREZA';
    return 'MATEMÁTICA';
  };

  return (
    <motion.div
      id="screen-aula-leitura"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex-1 flex flex-col bg-white text-slate-900 overflow-hidden relative select-text"
    >
      {/* Top Header with Gradient Transition */}
      <div
        className="w-full pt-2 pb-3.5 px-5 relative shrink-0 shadow-sm"
        style={{
          backgroundColor: headerBgColor,
          backgroundImage: `linear-gradient(to bottom, ${headerBgColor} 80%, rgba(255, 255, 255, 0.05) 92%, #ffffff 100%)`,
        }}
      >
        {/* Row 1: Back button and Area / Professor Info */}
        <div className="flex items-start justify-between">
          <button
            id="btn-leitura-back"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/35 active:scale-95 flex items-center justify-center text-white transition-all focus:outline-none cursor-pointer"
            aria-label="Voltar"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="text-right">
            <h1
              className="text-[18px] sm:text-[20px] font-black uppercase tracking-wide text-white leading-tight drop-shadow-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {getAreaDisplayTitle()}
            </h1>
          </div>
        </div>

        {/* Row 2: Date and Subject Label */}
        <div className="flex items-center justify-between text-[12px] text-white/95 font-medium mt-2 px-0.5">
          <span>{lesson.date || '10 de set. de 2026'}</span>
          <span className="lowercase font-semibold">
            matéria: {currentDisciplineLesson.subject || currentDisciplineLesson.title}
          </span>
        </div>

        {/* Row 3: Horizontal Discipline Tabs (Only abbreviations: Geo, Hist, Soc, etc.) */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar">
          {currentAreaDisciplines.map((d) => {
            const isSelected = selectedDisciplineKey === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setSelectedDisciplineKey(d.key)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-md ring-2 ring-white scale-[1.03]'
                    : 'bg-white/25 hover:bg-white/35 text-white'
                }`}
              >
                {d.abbr}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Action Bar (Audio reading & Questions, Video aula REMOVED) */}
      <div className="px-5 py-1.5 flex items-center justify-between border-b border-slate-100 text-xs text-slate-500 bg-slate-50/70">
        <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
          <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>Dúvidas & Discussão com o Professor</span>
        </span>

        <button
          onClick={toggleSpeech}
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
            isReadingSpeech
              ? 'bg-red-500 text-white animate-pulse'
              : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
          }`}
          title="Ouvir leitura do resumo"
        >
          {isReadingSpeech ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          <span>{isReadingSpeech ? 'Parar' : 'Ouvir'}</span>
        </button>
      </div>

      {/* Main Lecture Content */}
      <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3.5 no-scrollbar">
        {/* Title Header */}
        <div>
          <span
            className="text-[11px] font-bold uppercase tracking-wider block"
            style={{ color: headerBgColor }}
          >
            {currentArea.toUpperCase()} • {currentDisciplineLesson.subject || currentDisciplineLesson.title}
          </span>
          <h2
            className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-950 leading-tight mt-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {currentDisciplineLesson.topic.replace('assunto: ', '')}
          </h2>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] font-semibold text-slate-600">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Docente responsável: {currentDisciplineLesson.professorName}</span>
          </div>
        </div>

        {/* Tab Switcher inside the card: "Aula Resumida" vs "Versão Estendida" */}
        <div className="w-full bg-slate-100 p-1 rounded-2xl flex items-center gap-1 shadow-2xs">
          <button
            onClick={() => setCardTab('resumo')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              cardTab === 'resumo'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.01]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Aula Resumida</span>
          </button>

          <button
            onClick={() => setCardTab('estendida')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              cardTab === 'estendida'
                ? 'bg-white text-slate-950 shadow-xs scale-[1.01]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Versão Estendida</span>
          </button>
        </div>

        {/* Content Body: Rendered with New York Serif typography with underlined parts in bold */}
        <div className="lesson-editorial font-new-york text-[14px] sm:text-[14.5px] leading-[1.65] text-slate-800 space-y-3.5">
          {cardTab === 'resumo' ? (
            /* =================== AULA RESUMIDA =================== */
            <div className="space-y-3.5">
              {/* Overview Box */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-slate-700 font-medium">
                <p className="font-new-york italic text-[13.5px]">
                  {currentDisciplineLesson.description}
                </p>
              </div>

              {/* Summary Points with Underlined Bold Highlights */}
              <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-200/70 space-y-2.5">
                <div className="flex items-center gap-1.5 text-blue-900 font-bold text-[12.5px] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pontos Fundamentais da Aula:</span>
                </div>

                <div className="space-y-2 text-slate-800 text-[13.5px]">
                  {currentDisciplineLesson.summaryPoints?.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <p className="flex-1">
                        <strong className="font-bold underline underline-offset-4 decoration-blue-400">
                          {idx === 0 ? 'Conceito Central:' : idx === 1 ? 'Atenção Principal:' : 'Destaque Docente:'}
                        </strong>{' '}
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topic Highlights Summary Cards */}
              {currentDisciplineLesson.topicSections && currentDisciplineLesson.topicSections.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  <h3 className="text-[12px] font-bold font-sans uppercase tracking-wider text-slate-500">
                    Resumo dos Tópicos Abordados
                  </h3>
                  {currentDisciplineLesson.topicSections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-sans font-bold text-[11px] flex items-center justify-center shrink-0">
                          {sec.number || idx + 1}
                        </span>
                        <h4 className="font-sans font-bold text-[13.5px] text-slate-900">
                          {sec.title}
                        </h4>
                      </div>

                      <p className="text-[13.5px] text-slate-700 pl-7 leading-relaxed">
                        {sec.content}
                      </p>

                      {sec.formula && (
                        <div className="mt-2 ml-7 p-2 rounded-xl bg-slate-900 text-emerald-300 font-mono text-[12px] font-bold">
                          <u>Fórmula chave:</u> {sec.formula}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Assignment Notice */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/90 rounded-2xl">
                <strong className="font-sans font-bold text-amber-950 block text-[13px]">
                  Atividade Recomendada
                </strong>
                <p className="mt-0.5 text-amber-900 text-[12.5px]">
                  {currentDisciplineLesson.exercises?.[0]?.question ||
                    'Revisar os tópicos centrais da aula e resolver os exercícios do módulo do SESI.'}
                </p>
                <div className="mt-1.5 text-[11px] font-sans font-semibold text-amber-800">
                  Prazo de Entrega: Próxima aula • Módulo do SESI
                </div>
              </div>
            </div>
          ) : (
            /* =================== VERSÃO ESTENDIDA =================== */
            <div className="space-y-4">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Guia Teórico Completo & Contextualização
                </span>
                <p className="text-[13.5px] leading-relaxed">
                  Esta é a <strong className="font-bold underline underline-offset-4 decoration-2">versão estendida</strong> com o detalhamento analítico, deduções conceituais, contextualização histórica e científica e resolução sistemática para aprofundamento nos exames e matriz de competências do SESI.
                </p>
              </div>

              {/* In-depth Sections */}
              {currentDisciplineLesson.topicSections && currentDisciplineLesson.topicSections.length > 0 ? (
                currentDisciplineLesson.topicSections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-sans font-bold text-[12px] flex items-center justify-center shrink-0 shadow-2xs">
                        {sec.number || idx + 1}
                      </span>
                      <h4 className="font-sans font-extrabold text-[15px] text-slate-950">
                        {sec.title}
                      </h4>
                    </div>

                    <p className="text-[14px] text-slate-800 leading-relaxed pl-1">
                      {sec.content}
                    </p>

                    {sec.subpoints && sec.subpoints.length > 0 && (
                      <div className="space-y-1.5 pl-2 pt-1 border-l-2 border-blue-400">
                        {sec.subpoints.map((sub, sIdx) => (
                          <div key={sIdx} className="text-[13px] text-slate-700 leading-snug">
                            <span className="font-mono font-bold text-slate-900">•</span>{' '}
                            <span className="font-medium">{sub}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.formula && (
                      <div className="p-2.5 rounded-xl bg-slate-950 text-emerald-400 font-mono text-[12.5px] font-bold shadow-inner">
                        <span className="text-slate-400 font-sans text-[11px] block font-semibold uppercase tracking-wider mb-0.5">
                          Expressão Matemática / Relação:
                        </span>
                        <u>{sec.formula}</u>
                      </div>
                    )}

                    {sec.highlight && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-[12.5px] italic">
                        <strong className="font-sans font-bold text-slate-900 not-italic">
                          Nota do Professor:{' '}
                        </strong>
                        {sec.highlight}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 space-y-2">
                  <h4 className="font-sans font-bold text-slate-900">
                    {currentDisciplineLesson.topic}
                  </h4>
                  <p className="text-[13.5px] leading-relaxed">
                    {currentDisciplineLesson.description}
                  </p>
                </div>
              )}

              {/* Exercises Section */}
              {currentDisciplineLesson.exercises && currentDisciplineLesson.exercises.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-600" />
                    <h4 className="font-sans font-bold text-[14px] text-slate-950 uppercase tracking-wide">
                      Questão de Fixação
                    </h4>
                  </div>

                  {currentDisciplineLesson.exercises.map((ex) => (
                    <div key={ex.id} className="space-y-2 text-[13px]">
                      <p className="font-medium text-slate-900">{ex.question}</p>
                      <div className="space-y-1.5 pl-2">
                        {ex.options.map((opt, oIdx) => (
                          <div
                            key={oIdx}
                            className={`p-2 rounded-xl text-xs font-sans font-semibold border ${
                              oIdx === ex.correctIndex
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                : 'bg-white border-slate-200 text-slate-700'
                            }`}
                          >
                            {opt} {oIdx === ex.correctIndex && '✓ (Gabarito Oficial)'}
                          </div>
                        ))}
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-[12px] text-slate-600 italic">
                        <strong className="font-sans font-bold not-italic text-slate-800">
                          Resolução comentada:{' '}
                        </strong>
                        {ex.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Discussion / Comments Section */}
        <div className="pt-3 border-t border-slate-200">
          <h3 className="text-[13px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
            Comentários da Turma ({comments.length})
          </h3>

          <div className="flex flex-col gap-2.5">
            {comments.map((c) => (
              <div
                key={c.id}
                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {/* Avatar circle */}
                <div
                  className={`w-7 h-7 rounded-full ${c.avatarColor} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs`}
                >
                  {c.author.charAt(0)}
                </div>

                {/* Comment content */}
                <div className="flex-1 leading-snug">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">{c.author}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{c.handle}</span>
                    <span className="text-[10px] text-slate-400">• {c.timeAgo}</span>
                  </div>

                  <p className="text-[12.5px] text-slate-700 mt-0.5">{c.text}</p>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => handleLike(c.id)}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-red-500 pt-1 cursor-pointer transition-colors"
                  title="Curtir dúvida"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      c.isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'
                    }`}
                  />
                  {c.likes > 0 && <span className="font-semibold">{c.likes}</span>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Comment Input Bar */}
      <div className="w-full bg-white border-t border-slate-200 p-2 sm:p-2.5 shrink-0">
        <div className="flex items-center gap-2 mb-1.5 px-1 overflow-x-auto no-scrollbar">
          {quickSuggestions.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              className="px-3 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
            >
              "{chip}"
            </button>
          ))}
        </div>

        <form onSubmit={handleSendComment} className="flex items-center gap-1.5">
          <input
            type="text"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Tire sua dúvida com o professor..."
            className="flex-1 bg-slate-100 hover:bg-slate-150 focus:bg-white text-slate-900 text-xs px-3.5 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />

          <button
            type="button"
            onClick={toggleSpeech}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
            title="Gravar áudio da dúvida"
          >
            <Mic className="w-4 h-4" />
          </button>

          <button
            type="submit"
            disabled={!newCommentText.trim()}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white cursor-pointer transition-colors"
            title="Enviar mensagem"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};
