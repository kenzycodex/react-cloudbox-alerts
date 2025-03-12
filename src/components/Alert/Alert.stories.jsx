import React from 'react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'A versatile alert component for displaying messages and notifications.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { 
        type: 'select', 
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light'] 
      },
      description: 'Alert style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    withIcon: { 
      control: 'boolean',
      description: 'Whether to display an icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    withBackground: { 
      control: 'boolean',
      description: 'Use colored background instead of colored text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    dismissible: { 
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    autoHideDuration: { 
      control: 'number',
      description: 'Auto-hide duration in milliseconds (0 = no auto-hide)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    children: { 
      control: 'text',
      description: 'Alert content',
    },
    animation: {
      control: { 
        type: 'select', 
        options: ['fade', 'slide', 'bounce', 'zoom', 'slide-up', 'slide-down', 'slide-left', 'slide-right'] 
      },
      description: 'Animation type for appearance/disappearance',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
      },
    },
    position: {
      control: { 
        type: 'select', 
        options: ['top', 'bottom', 'left', 'right', 'center'] 
      },
      description: 'Alert position, used for animations',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    iconSet: {
      control: 'text',
      description: 'Icon set to use',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ri' },
      },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default alert',
  variant: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Operation completed successfully!',
  variant: 'success',
  withIcon: true,
};

export const Error = Template.bind({});
Error.args = {
  children: 'An error occurred while processing your request.',
  variant: 'danger',
  withIcon: true,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning: This action cannot be undone.',
  variant: 'warning',
  withIcon: true,
};

export const Info = Template.bind({});
Info.args = {
  children: 'Here is some useful information.',
  variant: 'info',
  withIcon: true,
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  children: 'This alert has a colored background',
  variant: 'primary',
  withIcon: true,
  withBackground: true,
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  children: 'Click the X to dismiss this alert',
  variant: 'warning',
  dismissible: true,
};

export const AutoHide = Template.bind({});
AutoHide.args = {
  children: 'This alert will auto-hide after 3 seconds',
  variant: 'primary',
  autoHideDuration: 3000,
};

export const WithCustomAnimation = Template.bind({});
WithCustomAnimation.args = {
  children: 'This alert uses a bounce animation',
  variant: 'info',
  animation: 'bounce',
  withIcon: true,
};

export const WithRichContent = Template.bind({});
WithRichContent.args = {
  children: (
    <div>
      <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Alert with Rich Content</h4>
      <p style={{ margin: '0 0 0.5rem 0' }}>This alert contains rich HTML content including:</p>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        <li>Multiple paragraphs</li>
        <li>Lists</li>
        <li>Custom formatting</li>
      </ul>
    </div>
  ),
  variant: 'primary',
  withIcon: true,
};