import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { useTheme } from '../../hooks';
import styles from './AlertContainer.module.css';

/**
 * AlertContainer Component
 *
 * A global container for displaying alerts that can be triggered from anywhere in the app.
 * Manages multiple alerts and their dismissal.
 */
const AlertContainer = ({
  position = 'top-right',
  newestOnTop = true,
  limit = 5, // Maximum number of alerts to show at once
  spacing = 10, // Space between alerts in pixels
  containerWidth = 300, // Container width in pixels
  iconSet = 'ri', // Icon set to use
  darkMode: propDarkMode, // Allows overriding theme context
  offset = 20, // Offset from edge of screen
  zIndex = 9999, // Z-index of the container
}) => {
  const [alerts, setAlerts] = useState([]);
  const alertIdCounter = useRef(0);
  const containerRef = useRef(null);
  const { darkMode: themeDarkMode } = useTheme();
  
  // Use prop darkMode if provided, otherwise use theme context
  const darkMode = propDarkMode !== undefined ? propDarkMode : themeDarkMode;

  // Parse position into logical parts
  const [vPosition, hPosition] = position.split('-');

  // Add a new alert
  const addAlert = useCallback((alertProps) => {
    const id = alertIdCounter.current++;
    
    // Apply default animation based on position
    let defaultAnimation = 'fade';
    if (position.includes('top')) defaultAnimation = 'slide-down';
    if (position.includes('bottom')) defaultAnimation = 'slide-up';
    if (position.includes('left')) defaultAnimation = 'slide-right';
    if (position.includes('right')) defaultAnimation = 'slide-left';

    setAlerts((prevAlerts) => {
      // Create new alert
      const newAlert = {
        id,
        ...alertProps,
        animation: alertProps.animation || defaultAnimation,
        position: alertProps.position || vPosition,
        timestamp: Date.now(),
      };
      
      // Add to list, possibly removing oldest if we've hit the limit
      let updatedAlerts = newestOnTop
        ? [newAlert, ...prevAlerts]
        : [...prevAlerts, newAlert];
        
      // Apply limit if set
      if (limit > 0 && updatedAlerts.length > limit) {
        updatedAlerts = updatedAlerts.slice(0, limit);
      }
      
      return updatedAlerts;
    });

    return id;
  }, [position, vPosition, newestOnTop, limit]);

  // Remove an alert by ID
  const removeAlert = useCallback((id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  }, []);

  // Register the alert functions to window for global access
  useEffect(() => {
    // Create a global alerts object if it doesn't exist
    window.cloudboxAlerts = window.cloudboxAlerts || {};

    // Add alert management functions
    window.cloudboxAlerts.show = (message, options = {}) => {
      return addAlert({ children: message, ...options });
    };

    window.cloudboxAlerts.success = (message, options = {}) => {
      return addAlert({
        children: message,
        variant: 'success',
        withIcon: true,
        ...options,
      });
    };

    window.cloudboxAlerts.error = (message, options = {}) => {
      return addAlert({
        children: message,
        variant: 'danger',
        withIcon: true,
        ...options,
      });
    };

    window.cloudboxAlerts.warning = (message, options = {}) => {
      return addAlert({
        children: message,
        variant: 'warning',
        withIcon: true,
        ...options,
      });
    };

    window.cloudboxAlerts.info = (message, options = {}) => {
      return addAlert({
        children: message,
        variant: 'info',
        withIcon: true,
        ...options,
      });
    };

    window.cloudboxAlerts.remove = removeAlert;

    window.cloudboxAlerts.clear = () => {
      setAlerts([]);
    };

    return () => {
      // Clean up
      delete window.cloudboxAlerts;
    };
  }, [addAlert, removeAlert]);

  // Sort alerts by timestamp if needed
  const sortedAlerts = newestOnTop
    ? alerts
    : [...alerts].sort((a, b) => b.timestamp - a.timestamp);

  // Compute container position styles
  const containerStyle = {
    position: 'fixed',
    zIndex,
    maxWidth: `${containerWidth}px`,
    width: '100%',
  };

  // Add position-specific styles
  if (position.includes('top')) containerStyle.top = `${offset}px`;
  if (position.includes('bottom')) containerStyle.bottom = `${offset}px`;
  if (position.includes('left')) containerStyle.left = `${offset}px`;
  if (position.includes('right')) containerStyle.right = `${offset}px`;
  if (position === 'top-center' || position === 'bottom-center') {
    containerStyle.left = '50%';
    containerStyle.transform = 'translateX(-50%)';
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.alertContainer} ${darkMode ? styles.darkMode : ''}`}
      style={containerStyle}
      data-position={position}
    >
      {sortedAlerts.map((alert, index) => (
        <div 
          key={alert.id} 
          className={styles.alertWrapper}
          style={{ marginBottom: `${index < sortedAlerts.length - 1 ? spacing : 0}px` }}
        >
          <Alert
            {...alert}
            iconSet={iconSet}
            dismissible={alert.dismissible !== false} // Default to dismissible
            onDismiss={() => removeAlert(alert.id)}
          />
        </div>
      ))}
    </div>
  );
};

AlertContainer.propTypes = {
  /**
   * Container position on screen
   */
  position: PropTypes.oneOf([
    'top-right',
    'top-left',
    'top-center',
    'bottom-right',
    'bottom-left',
    'bottom-center'
  ]),
  /**
   * Show newest alerts on top
   */
  newestOnTop: PropTypes.bool,
  /**
   * Maximum number of alerts to show at once (0 = unlimited)
   */
  limit: PropTypes.number,
  /**
   * Space between alerts in pixels
   */
  spacing: PropTypes.number,
  /**
   * Container width in pixels
   */
  containerWidth: PropTypes.number,
  /**
   * Icon set to use (passed to Alert component)
   */
  iconSet: PropTypes.string,
  /**
   * Override darkMode from theme context
   */
  darkMode: PropTypes.bool,
  /**
   * Offset from edge of screen in pixels
   */
  offset: PropTypes.number,
  /**
   * Z-index of the container
   */
  zIndex: PropTypes.number,
};

export default AlertContainer;