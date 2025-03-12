import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create the context with default values
export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
  isTransitioning: false,
});

/**
 * ThemeProvider component
 * Provides theme state and toggling functionality to the app
 */
export const ThemeProvider = ({ children, defaultDarkMode = false }) => {
  // Initialize state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check for stored preference in localStorage
    const storedPreference = localStorage.getItem('darkMode');

    if (storedPreference !== null) {
      return storedPreference === 'true';
    }

    // Check for system preference if no stored preference
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Fall back to default prop
    return defaultDarkMode;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply theme changes when darkMode changes
  useEffect(() => {
    // Update document with the current theme
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    // Store preference in localStorage
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');

    if (!mediaQuery) return;

    const handleChange = (e) => {
      // Only update if no user preference has been set
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      // Clean up
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  /**
   * Toggle theme with smooth transition
   */
  const toggleTheme = () => {
    // Start transition
    setIsTransitioning(true);

    // Toggle dark mode
    setDarkMode((prevMode) => !prevMode);

    // End transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        isTransitioning,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultDarkMode: PropTypes.bool,
};

export default ThemeProvider;
