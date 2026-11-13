'use client';

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

function applyTheme(newTheme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (newTheme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
  }
}

const themeListeners = new Set();
function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

function subscribeTheme(callback) {
  themeListeners.add(callback);
  const media = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const onMediaChange = () => callback();
  media?.addEventListener('change', onMediaChange);
  return () => {
    themeListeners.delete(callback);
    media?.removeEventListener('change', onMediaChange);
  };
}

function getThemeSnapshot() {
  try {
    const saved = localStorage.getItem('ns-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
}

function getServerThemeSnapshot() {
  return 'dark';
}

function subscribeMounted() {
  return () => {};
}
function getMountedSnapshot() {
  return true;
}
function getServerMountedSnapshot() {
  return false;
}

export function ThemeProvider({ children }) {
  const currentTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const mounted = useSyncExternalStore(subscribeMounted, getMountedSnapshot, getServerMountedSnapshot);
  const [themeOverride, setThemeOverride] = useState(null);

  const theme = themeOverride || currentTheme;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeOverride(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem('ns-theme', newTheme);
      notifyThemeListeners();
    } catch {}
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
