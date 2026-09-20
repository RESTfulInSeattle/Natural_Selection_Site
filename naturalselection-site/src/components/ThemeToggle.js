'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Avoid hydration mismatch by rendering a stable placeholder until mounted
  const isDark = mounted ? theme === 'dark' : true;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 border ${
        isDark
          ? 'bg-slate-900/80 text-emerald-300 border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800 shadow-sm shadow-emerald-950/40'
          : 'bg-white/90 text-sky-700 border-sky-300 hover:border-sky-500 hover:bg-white shadow-sm shadow-sky-100'
      } ${className}`}
    >
      {/* Icon Switch Pill */}
      <div className="relative w-10 h-5 bg-slate-800/80 dark:bg-slate-950 rounded-full p-0.5 transition-colors border border-emerald-500/30 dark:border-emerald-400/40 flex items-center">
        <div
          className={`w-4 h-4 rounded-full transition-transform duration-300 flex items-center justify-center text-[10px] shadow-sm ${
            isDark
              ? 'translate-x-5 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950'
              : 'translate-x-0 bg-gradient-to-r from-amber-300 to-sky-400 text-slate-900'
          }`}
        >
          {isDark ? (
            /* Moon icon */
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            /* Sun icon */
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold select-none">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}
