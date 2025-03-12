import React from 'react';
import AlertContainer from './AlertContainer';
import { AlertService } from '../../services';

export default {
  title: 'Components/AlertContainer',
  component: AlertContainer,
  parameters: {
    docs: {
      description: {
        component: 'A container for managing and displaying alerts triggered via the AlertService.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      control: { 
        type: 'select', 
        options: [
          'top-right',
          'top-left',
          'top-center',
          'bottom-right',
          'bottom-left',
          'bottom-center'
        ]
      },
      description: 'Container position on screen',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    newestOnTop: { 
      control: 'boolean',
      description: 'Show newest alerts on top',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    limit: { 
      control: 'number',
      description: 'Maximum number of alerts to show at once (0 = unlimited)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
    },
    spacing: { 
      control: 'number',
      description: 'Space between alerts in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
    },
    containerWidth: { 
      control: 'number',
      description: 'Container width in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 300 },
      },
    },
    darkMode: { 
      control: 'boolean',
      description: 'Override darkMode from theme context',
      table: {
        type: { summary: 'boolean' },
      },
    },
    offset: {
      control: 'number',
      description: 'Offset from edge of screen in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 20 },
      },
    },
    zIndex: {
      control: 'number',
      description: 'Z-index of the container',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 9999 },
      },
    },
  },
};

const Template = (args) => {
  // Reset alerts when story changes
  React.useEffect(() => {
    return () => {
      AlertService.clear();
    };
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <AlertContainer {...args} />
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>AlertContainer Demo</h2>
        <p>Try the different buttons below to show various alert types:</p>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <button 
          onClick={() => AlertService.success('Success message!')}
          style={{ padding: '0.5rem 1rem', background: '#57d25f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Success
        </button>
        
        <button 
          onClick={() => AlertService.error('Error message!')}
          style={{ padding: '0.5rem 1rem', background: '#e873a9', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Error
        </button>
        
        <button 
          onClick={() => AlertService.warning('Warning message!')}
          style={{ padding: '0.5rem 1rem', background: '#f8c432', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Warning
        </button>
        
        <button 
          onClick={() => AlertService.info('Information message!')}
          style={{ padding: '0.5rem 1rem', background: '#fa9674', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Info
        </button>
        
        <button 
          onClick={() => AlertService.clear()}
          style={{ padding: '0.5rem 1rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Clear All
        </button>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <button 
          onClick={() => {
            AlertService.success('Auto-hide alert (3s)', { 
              autoHideDuration: 3000 
            });
          }}
          style={{ padding: '0.5rem 1rem', background: '#6065f2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Auto-hide (3s)
        </button>
        
        <button 
          onClick={() => {
            AlertService.show('Alert with animation', { 
              animation: 'bounce',
              variant: 'primary',
              withIcon: true
            });
          }}
          style={{ padding: '0.5rem 1rem', background: '#6065f2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          With Animation
        </button>
        
        <button 
          onClick={async () => {
            try {
              await AlertService.confirm('Are you sure you want to continue?');
              AlertService.success('Action confirmed!');
            } catch (err) {
              AlertService.info('Action cancelled');
            }
          }}
          style={{ padding: '0.5rem 1rem', background: '#6065f2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Confirmation
        </button>
        
        <button 
          onClick={() => {
            const progressAlert = AlertService.progress('Operation in progress...', {
              variant: 'info',
              withIcon: true
            });
            
            let progress = 0;
            const interval = setInterval(() => {
              progress += 0.1;
              progressAlert.update('Processing...', progress);
              
              if (progress >= 1) {
                clearInterval(interval);
                progressAlert.complete('Operation completed successfully!');
              }
            }, 500);
          }}
          style={{ padding: '0.5rem 1rem', background: '#6065f2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Progress Alert
        </button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'top-right',
  newestOnTop: true,
  limit: 5,
  spacing: 10,
  containerWidth: 300,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottom-left',
  newestOnTop: false,
  limit: 5,
  spacing: 10,
  containerWidth: 300,
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  position: 'top-center',
  newestOnTop: true,
  limit: 5,
  spacing: 10,
  containerWidth: 300,
};

export const NoLimit = Template.bind({});
NoLimit.args = {
  position: 'top-right',
  newestOnTop: true,
  limit: 0,
  spacing: 10,
  containerWidth: 300,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  position: 'top-right',
  newestOnTop: true,
  limit: 5,
  spacing: 10,
  containerWidth: 300,
  darkMode: true,
};