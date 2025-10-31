/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import '@testing-library/jest-dom';

// Mock do GSAP (para testes que usam animações)
(globalThis as any).gsap = {
  timeline: jest.fn(() => ({
    to: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    fromTo: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    play: jest.fn().mockReturnThis(),
    pause: jest.fn().mockReturnThis(),
    reverse: jest.fn().mockReturnThis(),
    restart: jest.fn().mockReturnThis(),
  })),
  to: jest.fn(),
  from: jest.fn(),
  fromTo: jest.fn(),
  set: jest.fn(),
};

// Mock do window.matchMedia (útil para testes responsivos)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock do IntersectionObserver
(globalThis as any).IntersectionObserver = class MockIntersectionObserver {
  observe() {
    /* noop */
  }
  disconnect() {
    /* noop */
  }
  unobserve() {
    /* noop */
  }
  takeRecords() {
    return [];
  }
};
