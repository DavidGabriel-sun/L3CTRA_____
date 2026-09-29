import React from 'react';

interface LectraSesiLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  showSesi?: boolean;
}

export const LectraSesiLogo: React.FC<LectraSesiLogoProps> = ({
  className = '',
  theme = 'dark',
  showSesi = true,
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      id="lectra-sesi-branding"
    >
      {/* Lectra Logo - Tipografia geométrica pura (sem linhas/fios) com espaçamento aumentado entre E e C */}
      <div
        className={`flex items-center ${
          isLight ? 'text-white' : 'text-slate-900'
        }`}
        title="Lectra"
      >
        <svg
          viewBox="12 13 100 30"
          className="h-6 sm:h-7 w-auto fill-current"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Lectra Logo"
        >
          {/* Letter L */}
          <path
            d="M 14 14.5 H 19.2 V 37.5 H 26 V 41.5 H 14 Z"
            fill="currentColor"
          />

          {/* Letter e */}
          <path
            d="M 41.5 33 H 31.5 C 31.8 36.5 34.2 38.8 37.5 38.8 C 39.5 38.8 41 38 41.8 36.5 L 44.5 38 C 43 40.5 40.5 42 37.2 42 C 32 42 28 38 28 33 C 28 28 32 24 37.2 24 C 42.5 24 44.8 28 44.8 33 H 41.5 Z M 41.5 30.5 C 41.2 27.8 39.5 26.8 37.2 26.8 C 34.8 26.8 32.2 28 31.8 30.5 H 41.5 Z"
            fill="currentColor"
          />

          {/* Letter c (Afastado do E com translação de 9px) */}
          <g transform="translate(9, 0)">
            <path
              d="M 57 27.5 L 54.5 29.5 C 53.2 27.8 51.8 26.8 49.5 26.8 C 45.8 26.8 43 29.5 43 33 C 43 36.5 45.8 39.2 49.5 39.2 C 51.8 39.2 53.2 38.2 54.5 36.5 L 57 38.5 C 55.2 40.8 52.8 42 49.2 42 C 43.5 42 39.8 38 39.8 33 C 39.8 28 43.5 24 49.2 24 C 52.8 24 55.2 25.2 57 27.5 Z"
              fill="currentColor"
            />
          </g>

          {/* Letter t (Acompanhando o espaçamento) */}
          <g transform="translate(9, 0)">
            <path
              d="M 62.5 19.5 H 65.5 V 24.5 H 70 V 27.2 H 65.5 V 36.5 C 65.5 38.5 66.2 39.2 68 39.2 C 68.8 39.2 69.5 39 70 38.6 L 70.5 41.2 C 69.5 41.8 68.4 42 67.2 42 C 64.2 42 62.5 40.2 62.5 37 V 27.2 H 59.8 V 24.5 H 62.5 V 19.5 Z"
              fill="currentColor"
            />
          </g>

          {/* Letter r (Acompanhando o espaçamento) */}
          <g transform="translate(9, 0)">
            <path
              d="M 72.5 24.5 H 75.8 V 28 C 76.8 25.8 79 24.2 81.2 24.2 C 82 24.2 82.8 24.4 83.2 24.7 L 82 27.8 C 81.4 27.4 80.8 27.2 80.2 27.2 C 77.8 27.2 75.8 29.2 75.8 32.5 V 41.5 H 72.5 V 24.5 Z"
              fill="currentColor"
            />
          </g>

          {/* Letter a (Single-Storey Geometric, acompanhando o espaçamento) */}
          <g transform="translate(9, 0)">
            <path
              d="M 98 24.5 H 101.2 V 41.5 H 98 V 39 C 96.5 41 94 42 91.2 42 C 86 42 82.2 38 82.2 33 C 82.2 28 86 24 91.2 24 C 94 24 96.5 25 98 27 V 24.5 Z M 91.5 27 C 88 27 85.5 29.6 85.5 33 C 85.5 36.4 88 39 91.5 39 C 95 39 98 36.4 98 33 C 98 29.6 95 27 91.5 27 Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>

      {/* Símbolo Oficial da Escola SESI (em Ciano da Escola SESI) */}
      {showSesi && (
        <>
          {/* Vertical Divider */}
          <div
            className={`h-5 w-[1.5px] rounded-full ${
              isLight ? 'bg-white/40' : 'bg-slate-300'
            }`}
          />

          <div
            className="flex flex-col items-start leading-none select-none"
            id="escola-sesi-official-badge"
          >
            <span
              className={`font-black tracking-[0.24em] text-[7.5px] uppercase ${
                isLight ? 'text-white/90' : 'text-[#00828A]'
              } mb-0.5`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              ESCOLA
            </span>

            {/* Emblema Ciano Oficial do SESI */}
            <div
              className="bg-[#00828A] text-white px-2 py-[2.5px] rounded-[4px] shadow-sm flex items-center justify-center transition-colors"
              style={{ boxShadow: '0 1px 3px rgba(0, 130, 138, 0.35)' }}
            >
              <span
                className="font-black italic tracking-tight text-[12.5px] text-white leading-none transform -skew-x-12 inline-block select-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Arial Black', sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                SESI
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
