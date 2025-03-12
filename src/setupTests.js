// Setup file for Jest tests
import '@testing-library/jest-dom';

// Mock file for images and other assets
global.__mocks__ = {
  fileMock: 'test-file-stub',
};

// Setup for testing React components
// This will make all React Testing Library methods available
// in our tests without having to import them

// Mock console methods to prevent noise in test output
const originalConsole = { ...console };

beforeAll(() => {
  // Keep console.error and console.warn but make them not pollute test output
  console.error = (...args) => {
    originalConsole.error(...args);
  };

  console.warn = (...args) => {
    originalConsole.warn(...args);
  };
});

afterAll(() => {
  // Restore original console methods
  console.error = originalConsole.error;
  console.warn = originalConsole.warn;
});

// Mock window.matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };
