import React from 'react';
import { Bluetooth, Wifi, BatteryFull } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime?: string;
  isMockupView?: boolean;
  statusBarTheme?: 'light' | 'dark'; // 'light' means light text on dark background, 'dark' means dark text on light background
  screenBg?: string;
  statusBarBg?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  currentTime = '9:41',
  isMockupView = true,
  statusBarTheme = 'light',
  screenBg = 'bg-[#54565e]',
  statusBarBg,
}) => {
  const isDarkIcons = statusBarTheme === 'dark';
  const statusTextColor = isDarkIcons ? 'text-slate-900' : 'text-white';
  const homeIndicatorColor = isDarkIcons ? 'bg-slate-400' : 'bg-white/80';

  if (!isMockupView) {
    return (
      <div className={`w-full max-w-md mx-auto min-h-screen ${screenBg} flex flex-col shadow-2xl overflow-hidden relative`}>
        {/* Status Bar */}
        <div
          className={`w-full pt-3 pb-2 px-7 flex items-center justify-between ${statusTextColor} select-none z-20 transition-colors duration-200`}
          style={statusBarBg ? { backgroundColor: statusBarBg } : undefined}
        >
          <span className="text-[15px] font-semibold tracking-tight">{currentTime}</span>
          <div className="flex items-center gap-2">
            <Bluetooth className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            <Wifi className="w-4 h-4 shrink-0" strokeWidth={2.2} />
            <BatteryFull className="w-4 h-4 shrink-0" strokeWidth={2.2} />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>

        {/* Home Indicator */}
        <div className="w-full py-2 flex justify-center items-center select-none bg-transparent">
          <div className={`w-32 h-1 ${homeIndicatorColor} rounded-full`} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-4 sm:my-8 transition-all duration-300">
      {/* External Titanium Phone Body */}
      <div
        className="relative w-[340px] sm:w-[380px] h-[700px] sm:h-[780px] rounded-[52px] p-[10px] sm:p-[12px] shadow-2xl flex flex-col"
        style={{
          background: 'linear-gradient(145deg, #828388, #4f5056, #2d2e33)',
          boxShadow:
            '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0,0,0,0.6)',
        }}
      >
        {/* Antenna bands & buttons hints on phone edge */}
        <div className="absolute -left-[3px] top-[115px] w-[3px] h-[36px] bg-[#696a71] rounded-l" />
        <div className="absolute -left-[3px] top-[165px] w-[3px] h-[55px] bg-[#696a71] rounded-l" />
        <div className="absolute -left-[3px] top-[230px] w-[3px] h-[55px] bg-[#696a71] rounded-l" />
        <div className="absolute -right-[3px] top-[175px] w-[3px] h-[80px] bg-[#696a71] rounded-r" />

        {/* Black Bezel Border */}
        <div className="relative w-full h-full rounded-[42px] bg-black p-[6px] overflow-hidden flex flex-col">
          {/* Inner Display Area */}
          <div className={`relative w-full h-full rounded-[36px] ${screenBg} overflow-hidden flex flex-col transition-colors duration-200`}>
            {/* Top Status Bar with Dynamic Island */}
            <div
              className={`relative z-30 pt-3 pb-1.5 px-6 flex items-center justify-between ${statusTextColor} select-none shrink-0 transition-colors duration-200`}
              style={statusBarBg ? { backgroundColor: statusBarBg } : undefined}
            >
              <span className="text-[14px] font-semibold tracking-tight min-w-[52px] pl-1">
                {currentTime}
              </span>

              {/* Dynamic Island */}
              <div className="w-24 sm:w-28 h-7 bg-black rounded-full flex items-center justify-between px-3 shadow-sm mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-blue-900/30 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                </div>
                <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
              </div>

              {/* Bluetooth, WiFi, Battery */}
              <div className="flex items-center gap-1.5 min-w-[52px] justify-end pr-1">
                <Bluetooth className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                <Wifi className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                <BatteryFull className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
              </div>
            </div>

            {/* Screen Viewport Content */}
            <div className="flex-1 flex flex-col overflow-y-auto relative no-scrollbar">
              {children}
            </div>

            {/* Home Indicator Bar */}
            <div className="w-full py-2 flex justify-center items-center select-none bg-transparent shrink-0">
              <div className={`w-32 h-1 ${homeIndicatorColor} rounded-full`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
