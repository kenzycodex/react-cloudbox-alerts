// Import components
import Alert from './components/Alert';
import AlertContainer from './components/AlertContainer';
import Icon from './components/Icon';

// Import services
import AlertService from './services/AlertService';

// Import context and hooks
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';

// Export everything
export {
  // Components
  Alert,
  AlertContainer,
  Icon,

  // Services
  AlertService,

  // Context and hooks
  ThemeContext,
  ThemeProvider,
  useTheme,
};

// Default export for easier imports
export default {
  Alert,
  AlertContainer,
  Icon,
  AlertService,
  ThemeProvider,
  useTheme,
};
