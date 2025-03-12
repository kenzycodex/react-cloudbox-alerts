/**
 * Theme initialization utility
 * 
 * This utility helps with initializing the theme early
 * to avoid a flash of incorrect theme on page load.
 */

/**
 * Get the current dark mode state
 * @returns {boolean} True if dark mode is enabled
 */
export const isDarkMode = () => {
  // Check for saved setting in localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  
  if (savedDarkMode !== null) {
    return savedDarkMode === 'true';
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  
  return false;
};

/**
 * Set theme preference
 * @param {boolean} isDark - Whether to enable dark mode
 */
export const setThemePreference = (isDark) => {
  // Save to localStorage
  localStorage.setItem('darkMode', String(isDark));
  
  // Apply to DOM
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

/**
 * Initialize theme as early as possible
 * This function should be called directly in the HTML
 * or in the earliest JavaScript execution
 */
export const initializeTheme = () => {
  const dark = isDarkMode();
  setThemePreference(dark);
};

// Initialize theme immediately if this file is imported directly
if (typeof window !== 'undefined') {
  initializeTheme();
}