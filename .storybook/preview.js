import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/styles/variables.css';
import '../src/styles/themes.css';
import '../src/styles/animations.css';

// Add Remix Icon and Font Awesome styles
// You need to install these packages if not already done
// npm install remixicon @fortawesome/fontawesome-free
import 'remixicon/fonts/remixicon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Add custom theme toggle tool
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

// Create a custom container with animation controls
const AnimationControls = ({ children }) => {
  const [animation, setAnimation] = React.useState('fade');
  const [position, setPosition] = React.useState('top');

  const animations = ['fade', 'slide', 'bounce', 'zoom'];
  const positions = ['top', 'bottom', 'left', 'right', 'center'];

  return (
    <div className="animation-controls" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Animation:</label>
          <select
            value={animation}
            onChange={e => setAnimation(e.target.value)}
            style={{ padding: '0.25rem' }}
          >
            {animations.map(anim => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Position:</label>
          <select
            value={position}
            onChange={e => setPosition(e.target.value)}
            style={{ padding: '0.25rem' }}
          >
            {positions.map(pos => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>
      </div>
      {React.cloneElement(children, { animation, position })}
    </div>
  );
};

// Wrap stories with theme provider and animation controls
const withThemeProvider = (Story, context) => {
  const isDarkMode = context.globals.theme === 'dark';

  // Only apply animation controls to Alert component stories
  const isAlertComponent = context.title === 'Components/Alert';

  const StoryWithControls = isAlertComponent ? (
    <AnimationControls>
      <Story {...context} />
    </AnimationControls>
  ) : (
    <Story {...context} />
  );

  return (
    <ThemeProvider defaultDarkMode={isDarkMode}>
      <div
        style={{
          padding: '2rem',
          backgroundColor: isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)',
          color: isDarkMode ? 'var(--text-light)' : 'var(--text-dark)',
          borderRadius: 'var(--border-radius-lg)',
          transition: 'all 0.3s ease',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {StoryWithControls}
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

// Configure parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f8f9fa',
      },
      {
        name: 'dark',
        value: '#121212',
      },
    ],
  },
};
