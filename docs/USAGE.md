# React Cloudbox Alerts - Usage Guide

This guide provides detailed information on how to use the React Cloudbox Alerts library in your projects, with examples and best practices.

## Table of Contents

- [Installation](#installation)
- [Basic Setup](#basic-setup)
- [Using the AlertService](#using-the-alertservice)
- [Customizing Alerts](#customizing-alerts)
- [Advanced Features](#advanced-features)
- [Example Scenarios](#example-scenarios)
- [API Reference](#api-reference)
- [Troubleshooting](#troubleshooting)

## Installation

### npm
```bash
npm install react-cloudbox-alerts
```

### yarn
```bash
yarn add react-cloudbox-alerts
```

### pnpm
```bash
pnpm add react-cloudbox-alerts
```

## Basic Setup

### Setting up the Alert Container

The first step is to add the `AlertContainer` component to your application, typically at the root level:

```jsx
import React from 'react';
import { AlertContainer } from 'react-cloudbox-alerts';

function App() {
  return (
    <div className="app">
      {/* Add the AlertContainer at the root level */}
      <AlertContainer />
      
      {/* Your application content */}
      <main>
        <h1>My Application</h1>
        {/* ... */}
      </main>
    </div>
  );
}

export default App;
```

### Theme Provider Integration

For dark mode support and theme integration, wrap your application with the `ThemeProvider`:

```jsx
import React from 'react';
import { AlertContainer, ThemeProvider } from 'react-cloudbox-alerts';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <AlertContainer />
        {/* Your application content */}
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Using the AlertService

The `AlertService` provides methods to show alerts from anywhere in your application.

### Basic Alert Types

```jsx
import { AlertService } from 'react-cloudbox-alerts';

// Success alert
AlertService.success('Operation completed successfully!');

// Error alert
AlertService.error('An error occurred while processing your request.');

// Warning alert
AlertService.warning('This action cannot be undone.');

// Info alert
AlertService.info('New version available.');

// Generic alert with custom options
AlertService.show('Custom message', {
  variant: 'primary',
  withIcon: true,
  autoHideDuration: 5000
});
```

### Managing Alerts

```jsx
// Remove a specific alert by ID
const alertId = AlertService.success('This will be dismissed');
AlertService.remove(alertId);

// Clear all alerts
AlertService.clear();
```

## Customizing Alerts

### Customizing the Alert Container

```jsx
<AlertContainer 
  position="bottom-left"  // Position on screen
  newestOnTop={false}     // Show newest alerts at bottom
  limit={3}               // Show max 3 alerts at once
  spacing={15}            // 15px between alerts
  containerWidth={350}    // Container width in pixels
  iconSet="fa"            // Use Font Awesome icons
  offset={30}             // 30px from screen edge
  zIndex={1000}           // Custom z-index
/>
```

### Available Positions

The `position` prop accepts the following values:
- `top-right` (default)
- `top-left`
- `top-center`
- `bottom-right`
- `bottom-left`
- `bottom-center`

### Customizing Individual Alerts

```jsx
AlertService.show('Custom alert', {
  variant: 'info',               // Alert type
  withIcon: true,                // Show icon
  withBackground: true,          // Use background color
  dismissible: true,             // Can be dismissed with X
  icon: 'fa-bell',               // Custom icon
  autoHideDuration: 5000,        // Hide after 5 seconds
  animation: 'bounce',           // Use bounce animation
  position: 'top',               // Position for animation
  className: 'my-custom-alert',  // Additional CSS class
});
```

### Animation Types

The following animation types are available:
- `fade` (default)
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`
- `bounce`
- `zoom`

## Advanced Features

### Confirmation Alerts

Show an alert that requires user confirmation:

```jsx
import { AlertService } from 'react-cloudbox-alerts';

async function deleteItem() {
  try {
    // Show confirmation dialog
    await AlertService.confirm('Are you sure you want to delete this item?', {
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'danger'
    });
    
    // User confirmed, proceed with deletion
    await deleteItemFromDatabase();
    AlertService.success('Item deleted successfully!');
  } catch (error) {
    // User cancelled or error occurred
    console.log('Operation cancelled');
  }
}
```

### Progress Alerts

Show an alert with a progress indicator:

```jsx
import { AlertService } from 'react-cloudbox-alerts';

function uploadFile(file) {
  // Create a progress alert
  const progressAlert = AlertService.progress('Uploading file...', {
    variant: 'info',
    withIcon: true,
  });
  
  // Simulate file upload
  let progress = 0;
  const interval = setInterval(() => {
    progress += 0.1;
    
    if (progress < 1) {
      // Update progress
      progressAlert.update(`Uploading: ${Math.round(progress * 100)}%`, progress);
    } else {
      // Complete when done
      clearInterval(interval);
      progressAlert.complete('File uploaded successfully!');
    }
  }, 500);
  
  // Handle potential errors
  if (fileIsInvalid) {
    clearInterval(interval);
    progressAlert.error('Upload failed: invalid file format');
  }
}
```

### Dark Mode Integration

Use the `useTheme` hook to access and control theme settings:

```jsx
import React from 'react';
import { useTheme } from 'react-cloudbox-alerts';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## Example Scenarios

### Form Submission Feedback

```jsx
import React, { useState } from 'react';
import { AlertService } from 'react-cloudbox-alerts';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Show loading indicator
      const progressAlert = AlertService.progress('Sending message...', {
        variant: 'info'
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Complete with success
      progressAlert.complete('Message sent successfully!');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Show error alert
      AlertService.error('Failed to send message. Please try again.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Send Message</button>
    </form>
  );
}
```

### User Authentication Feedback

```jsx
import React from 'react';
import { AlertService } from 'react-cloudbox-alerts';

function LoginForm() {
  const handleLogin = async (credentials) => {
    try {
      // Show loading
      const progressAlert = AlertService.progress('Logging in...', {
        variant: 'info'
      });
      
      // Attempt login
      const result = await authenticateUser(credentials);
      
      if (result.success) {
        progressAlert.complete('Login successful!');
        navigateToDashboard();
      } else {
        progressAlert.error('Invalid username or password');
      }
    } catch (error) {
      AlertService.error('Login failed. Please try again later.');
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      {/* Login form fields */}
    </form>
  );
}
```

## API Reference

For a complete API reference, please see the [README.md](../README.md#api-reference) file.

## Troubleshooting

### Common Issues

#### Alerts not appearing

1. Check that `AlertContainer` is properly mounted in your application.
2. Ensure there are no errors in the console.
3. Verify that the alerts aren't being hidden by other elements with higher z-index.

#### Animation issues

1. Make sure your application doesn't have CSS that interferes with animations.
2. Try different animation types to see if the issue is specific to one animation.

#### Icon issues

1. If using custom icons, ensure the icon library is properly loaded.
2. For Font Awesome, make sure the Font Awesome CSS is included in your project.

### Getting Help

If you encounter issues not covered in this guide, please:
1. Check existing [GitHub issues](https://github.com/yourusername/react-cloudbox-alerts/issues)
2. Create a new issue with a detailed description of the problem
3. Include code examples, screenshots, and steps to reproduce