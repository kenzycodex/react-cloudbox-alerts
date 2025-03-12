# React Cloudbox Alerts

A flexible and powerful alert system for React applications.

![NPM](https://img.shields.io/npm/l/react-cloudbox-alerts)
![npm](https://img.shields.io/npm/v/react-cloudbox-alerts)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-cloudbox-alerts)

React Cloudbox Alerts provides a complete solution for displaying notifications, toasts, confirmations, and progress indicators in your React applications. With a focus on flexibility, performance, and developer experience, this library makes it easy to add beautiful alerts with minimal setup.

## Features

- 🚀 **Global Alert System** - Show alerts from anywhere in your application
- ✨ **Multiple Alert Types** - Success, error, warning, info, and custom alerts
- 🎭 **Animations** - Smooth entrance and exit animations
- 🌗 **Dark Mode Support** - Seamless integration with light/dark themes
- 📱 **Responsive Design** - Works on all screen sizes
- 🔧 **Highly Customizable** - Tailor alerts to match your application's design
- 🧩 **Modular Architecture** - Use only what you need
- 📦 **Small Footprint** - Minimal impact on your bundle size
- 🧪 **Well Tested** - Comprehensive test coverage

## Installation

```bash
# npm
npm install react-cloudbox-alerts

# yarn
yarn add react-cloudbox-alerts

# pnpm
pnpm add react-cloudbox-alerts
```

## Quick Start

### 1. Set up the AlertContainer

Add the `AlertContainer` component at the root level of your application:

```jsx
import React from 'react';
import { AlertContainer } from 'react-cloudbox-alerts';

function App() {
  return (
    <div className="app">
      {/* Add AlertContainer at the root level */}
      <AlertContainer position="top-right" />
      
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

### 2. Show alerts using AlertService

Now you can trigger alerts from anywhere in your application:

```jsx
import React from 'react';
import { AlertService } from 'react-cloudbox-alerts';

function Dashboard() {
  const handleSave = () => {
    // Save data
    AlertService.success('Data saved successfully!');
  };

  const handleError = () => {
    AlertService.error('An error occurred during the operation.');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleSave}>Save Data</button>
      <button onClick={handleError}>Trigger Error</button>
    </div>
  );
}

export default Dashboard;
```

## Advanced Usage

### Theme Integration

The library includes a built-in theme provider that integrates with your application's theme:

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

### Custom Alert Styling

Customize the appearance of alerts to match your application's design:

```jsx
import React from 'react';
import { AlertContainer } from 'react-cloudbox-alerts';

function App() {
  return (
    <div className="app">
      <AlertContainer 
        position="bottom-center"
        containerWidth={400}
        spacing={15}
        iconSet="fa" // Use Font Awesome icons
      />
      {/* Your application content */}
    </div>
  );
}

export default App;
```

### Confirmation Alerts

Show alerts that require user confirmation:

```jsx
import { AlertService } from 'react-cloudbox-alerts';

async function deleteItem() {
  try {
    await AlertService.confirm('Are you sure you want to delete this item?', {
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'danger'
    });
    
    // User confirmed, proceed with deletion
    await deleteItemFromDatabase();
    AlertService.success('Item deleted successfully!');
  } catch (error) {
    // User cancelled or an error occurred
    console.log('Operation cancelled');
  }
}
```

### Progress Alerts

Show alerts with progress indicators:

```jsx
import { AlertService } from 'react-cloudbox-alerts';

function uploadFile(file) {
  // Create a progress alert
  const progressAlert = AlertService.progress('Uploading file...', {
    variant: 'info',
    withIcon: true,
  });
  
  // Update progress as the operation proceeds
  const uploadTask = createUploadTask(file);
  
  uploadTask.on('progress', (snapshot) => {
    const progress = snapshot.bytesTransferred / snapshot.totalBytes;
    progressAlert.update(`Uploading: ${Math.round(progress * 100)}%`, progress);
  });
  
  uploadTask.on('success', () => {
    progressAlert.complete('File uploaded successfully!');
  });
  
  uploadTask.on('error', (error) => {
    progressAlert.error(`Upload failed: ${error.message}`);
  });
}
```

## API Reference

### Components

#### `<AlertContainer>`

The container component that manages and displays alerts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | string | `'top-right'` | Position of alerts on the screen. Options: `'top-right'`, `'top-left'`, `'top-center'`, `'bottom-right'`, `'bottom-left'`, `'bottom-center'` |
| `newestOnTop` | boolean | `true` | Whether to show newest alerts on top |
| `limit` | number | `5` | Maximum number of alerts to show at once (0 = unlimited) |
| `spacing` | number | `10` | Space between alerts in pixels |
| `containerWidth` | number | `300` | Container width in pixels |
| `iconSet` | string | `'ri'` | Icon set to use (e.g., 'ri' for Remix Icons, 'fa' for Font Awesome) |
| `darkMode` | boolean | - | Override dark mode from theme context |
| `offset` | number | `20` | Offset from edge of screen in pixels |
| `zIndex` | number | `9999` | Z-index of the container |

#### `<Alert>`

The individual alert component (usually used internally by `AlertContainer`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `'primary'` | Alert style variant: `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'light'` |
| `withIcon` | boolean | `false` | Whether to display an icon |
| `withBackground` | boolean | `false` | Use colored background instead of colored text |
| `dismissible` | boolean | `false` | Whether the alert can be dismissed |
| `icon` | string | - | Custom icon class (defaults based on variant) |
| `autoHideDuration` | number | `0` | Auto-hide duration in milliseconds (0 = no auto-hide) |
| `animation` | string | `'fade'` | Animation type: `'fade'`, `'slide'`, `'bounce'`, `'zoom'`, `'slide-up'`, `'slide-down'`, `'slide-left'`, `'slide-right'` |
| `position` | string | `'top'` | Alert position for animations: `'top'`, `'bottom'`, `'left'`, `'right'`, `'center'` |
| `className` | string | - | Additional CSS classes |
| `onDismiss` | function | - | Callback function when alert is dismissed |
| `children` | node | - | Alert content |

#### `<ThemeProvider>`

Provider component for theme context.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultDarkMode` | boolean | `false` | Initial dark mode state |
| `children` | node | - | Child components |

### Services

#### `AlertService`

Service for showing alerts programmatically.

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `show` | `(message, options)` | `alertId` | Shows a generic alert |
| `success` | `(message, options)` | `alertId` | Shows a success alert |
| `error` | `(message, options)` | `alertId` | Shows an error alert |
| `warning` | `(message, options)` | `alertId` | Shows a warning alert |
| `info` | `(message, options)` | `alertId` | Shows an info alert |
| `remove` | `(alertId)` | - | Removes an alert by ID |
| `clear` | - | - | Removes all alerts |
| `confirm` | `(message, options)` | `Promise` | Shows a confirmation alert |
| `progress` | `(message, options)` | `{update, complete, error}` | Shows a progress alert |

### Hooks

#### `useTheme`

Hook to access theme context.

```jsx
import { useTheme } from 'react-cloudbox-alerts';

function MyComponent() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## Browser Support

React Cloudbox Alerts supports all modern browsers:

- Chrome (and Chromium-based browsers like Edge)
- Firefox
- Safari
- Opera

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.