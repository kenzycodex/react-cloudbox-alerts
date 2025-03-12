import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * Hook to access the theme context
 * 
 * @returns {Object} Theme context containing:
 *  - darkMode {boolean} - Whether dark mode is enabled
 *  - toggleTheme {function} - Function to toggle between light and dark mode
 *  - isTransitioning {boolean } - Whether the theme is currently transitioning
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default useTheme;