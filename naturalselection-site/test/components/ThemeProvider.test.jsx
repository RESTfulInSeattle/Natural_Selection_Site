import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

function TestConsumer() {
  const { theme, toggleTheme, setTheme, mounted } = useTheme();
  return (
    <div>
      <span data-testid="theme-val">{theme}</span>
      <span data-testid="mounted-val">{mounted ? 'mounted' : 'unmounted'}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  );
}

describe('ThemeProvider & useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('renders children with default dark theme when no preference stored', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-val').textContent).toBe('dark');
    expect(screen.getByTestId('mounted-val').textContent).toBe('mounted');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('handles localStorage errors gracefully and falls back to dark theme', () => {
    const errorSpy = vi.spyOn(localStorage, 'getItem').mockImplementation(() => {
      throw new Error('Access denied');
    });

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-val').textContent).toBe('dark');
    errorSpy.mockRestore();
  });

  it('respects stored theme from localStorage', () => {
    localStorage.setItem('ns-theme', 'light');

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-val').textContent).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it('toggles theme between dark and light', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-val').textContent).toBe('dark');

    act(() => {
      screen.getByText('Toggle').click();
    });

    expect(screen.getByTestId('theme-val').textContent).toBe('light');
    expect(localStorage.getItem('ns-theme')).toBe('light');

    act(() => {
      screen.getByText('Toggle').click();
    });

    expect(screen.getByTestId('theme-val').textContent).toBe('dark');
    expect(localStorage.getItem('ns-theme')).toBe('dark');
  });

  it('allows explicit theme setting via setTheme', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    act(() => {
      screen.getByText('Set Light').click();
    });
    expect(screen.getByTestId('theme-val').textContent).toBe('light');

    act(() => {
      screen.getByText('Set Dark').click();
    });
    expect(screen.getByTestId('theme-val').textContent).toBe('dark');
  });
});
