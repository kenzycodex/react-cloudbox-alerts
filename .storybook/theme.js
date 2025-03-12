import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  
  // Brand
  brandTitle: 'React Cloudbox Alerts',
  brandUrl: 'https://github.com/yourusername/react-cloudbox-alerts',
  brandImage: null, // You can add a logo here: '/logo.png'
  brandTarget: '_self',
  
  // Colors
  colorPrimary: '#6065f2',
  colorSecondary: '#fa9674',
  
  // UI
  appBg: '#f8f9fa',
  appContentBg: '#ffffff',
  appBorderColor: 'rgba(0, 0, 0, 0.1)',
  appBorderRadius: 4,
  
  // Text colors
  textColor: '#343a40',
  textInverseColor: '#ffffff',
  
  // Form controls
  inputBg: '#ffffff',
  inputBorder: 'rgba(0, 0, 0, 0.1)',
  inputTextColor: '#343a40',
  inputBorderRadius: 4,
});

export const darkTheme = create({
  base: 'dark',
  
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  
  // Brand
  brandTitle: 'React Cloudbox Alerts',
  brandUrl: 'https://github.com/yourusername/react-cloudbox-alerts',
  brandImage: null, // You can add a logo here: '/logo-dark.png'
  brandTarget: '_self',
  
  // Colors
  colorPrimary: '#6065f2',
  colorSecondary: '#fa9674',
  
  // UI
  appBg: '#1D1D1F',
  appContentBg: '#121212',
  appBorderColor: '#27272A',
  appBorderRadius: 4,
  
  // Text colors
  textColor: '#f8f9fa',
  textInverseColor: '#343a40',
  
  // Form controls
  inputBg: '#27272A',
  inputBorder: '#454545',
  inputTextColor: '#f8f9fa',
  inputBorderRadius: 4,
});