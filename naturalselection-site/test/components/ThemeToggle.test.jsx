import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeProvider';

describe('ThemeToggle component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('renders theme toggle button with accessible labels', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', expect.stringMatching(/switch to (light|dark) mode/i));
  });

  it('toggles theme on click and updates aria-label', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    const initialLabel = button.getAttribute('aria-label');

    act(() => {
      button.click();
    });

    const newLabel = button.getAttribute('aria-label');
    expect(newLabel).not.toBe(initialLabel);
  });

  it('displays text label when showLabel prop is passed', () => {
    render(
      <ThemeProvider>
        <ThemeToggle showLabel={true} />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button.textContent).toMatch(/(Dark|Light)/);

    act(() => {
      button.click();
    });

    expect(button.textContent).toMatch(/(Dark|Light)/);
  });
});
