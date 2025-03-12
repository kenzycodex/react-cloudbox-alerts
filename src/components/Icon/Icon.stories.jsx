import React from 'react';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon component for displaying different icon sets.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name',
      table: {
        type: { summary: 'string' },
      },
    },
    set: {
      control: { 
        type: 'select', 
        options: ['ri', 'fa'] 
      },
      description: 'Icon set to use',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ri' },
      },
    },
    size: {
      control: { 
        type: 'select', 
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] 
      },
      description: 'Icon size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'color',
      description: 'Icon color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'currentColor' },
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const RemixIcon = Template.bind({});
RemixIcon.args = {
  name: 'alert-line',
  set: 'ri',
  size: 'lg',
};

export const FontAwesome = Template.bind({});
FontAwesome.args = {
  name: 'fas-info-circle',
  set: 'fa',
  size: 'lg',
};

export const Colored = Template.bind({});
Colored.args = {
  name: 'heart-fill',
  set: 'ri',
  size: 'xl',
  color: '#e873a9',
};

export const IconGrid = () => {
  const remixIcons = [
    'information-line',
    'check-line',
    'close-circle-line',
    'alert-line',
    'question-line',
    'user-line',
    'settings-line',
    'home-line',
    'search-line',
    'notification-line',
    'heart-line',
    'star-line',
  ];
  
  return (
    <div>
      <h3>Remix Icons</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem' 
      }}>
        {remixIcons.map(iconName => (
          <div 
            key={iconName} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '1rem',
              border: '1px solid #eee',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}
          >
            <Icon name={iconName} set="ri" size="xl" />
            <span style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{iconName}</span>
          </div>
        ))}
      </div>
      
      <h3 style={{ marginTop: '2rem' }}>Font Awesome Icons</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem' 
      }}>
        {['fas-info-circle', 'fas-check-circle', 'fas-exclamation-circle', 
          'fas-question-circle', 'fas-user', 'fas-cog', 'fas-home', 
          'fas-search', 'fas-bell', 'fas-heart', 'fas-star', 'fab-github'].map(iconName => (
          <div 
            key={iconName} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '1rem',
              border: '1px solid #eee',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}
          >
            <Icon name={iconName} set="fa" size="xl" />
            <span style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};