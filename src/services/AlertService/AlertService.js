/**
 * Alert Service
 *
 * A utility service for showing alerts throughout the application.
 * This provides a programmatic way to trigger alerts without direct component access.
 */
import React from 'react';

const AlertService = {
  /**
   * Show a generic alert
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {number} Alert ID
   */
  show: (message, options = {}) => {
    if (window.cloudboxAlerts?.show) {
      return window.cloudboxAlerts.show(message, options);
    }
    console.warn('AlertContainer not mounted yet. Falling back to console log.');
    console.log(message);
    return -1;
  },

  /**
   * Show a success alert
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {number} Alert ID
   */
  success: (message, options = {}) => {
    if (window.cloudboxAlerts?.success) {
      return window.cloudboxAlerts.success(message, options);
    }
    console.warn('AlertContainer not mounted yet. Falling back to console log.');
    console.log('[SUCCESS]', message);
    return -1;
  },

  /**
   * Show an error alert
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {number} Alert ID
   */
  error: (message, options = {}) => {
    if (window.cloudboxAlerts?.error) {
      return window.cloudboxAlerts.error(message, options);
    }
    console.warn('AlertContainer not mounted yet. Falling back to console log.');
    console.error(message);
    return -1;
  },

  /**
   * Show a warning alert
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {number} Alert ID
   */
  warning: (message, options = {}) => {
    if (window.cloudboxAlerts?.warning) {
      return window.cloudboxAlerts.warning(message, options);
    }
    console.warn('AlertContainer not mounted yet. Falling back to console log.');
    console.warn(message);
    return -1;
  },

  /**
   * Show an info alert
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {number} Alert ID
   */
  info: (message, options = {}) => {
    if (window.cloudboxAlerts?.info) {
      return window.cloudboxAlerts.info(message, options);
    }
    console.warn('AlertContainer not mounted yet. Falling back to console log.');
    console.info(message);
    return -1;
  },

  /**
   * Remove an alert by ID
   * @param {number} id - The alert ID to remove
   */
  remove: id => {
    if (window.cloudboxAlerts?.remove) {
      window.cloudboxAlerts.remove(id);
    }
  },

  /**
   * Clear all alerts
   */
  clear: () => {
    if (window.cloudboxAlerts?.clear) {
      window.cloudboxAlerts.clear();
    }
  },

  /**
   * Show a confirmation alert that requires user action
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {Promise} Resolves when user confirms, rejects when user cancels
   */
  confirm: (message, options = {}) => {
    return new Promise((resolve, reject) => {
      if (!window.cloudboxAlerts?.show) {
        console.warn('AlertContainer not mounted yet. Falling back to browser confirm.');
        if (window.confirm(message)) {
          resolve();
        } else {
          reject(new Error('User cancelled'));
        }
        return;
      }

      // Create confirmation UI using React.createElement instead of JSX
      const id = window.cloudboxAlerts.show(
        React.createElement(
          'div',
          null,
          React.createElement('div', null, message),
          React.createElement(
            'div',
            {
              style: {
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '8px',
              },
            },
            React.createElement(
              'button',
              {
                onClick: () => {
                  window.cloudboxAlerts.remove(id);
                  reject(new Error('User cancelled'));
                },
                style: { padding: '5px 10px' },
              },
              options.cancelText || 'Cancel'
            ),
            React.createElement(
              'button',
              {
                onClick: () => {
                  window.cloudboxAlerts.remove(id);
                  resolve();
                },
                style: { padding: '5px 10px', fontWeight: 'bold' },
              },
              options.confirmText || 'Confirm'
            )
          )
        ),
        {
          variant: options.variant || 'warning',
          withIcon: options.withIcon !== false,
          autoHideDuration: 0, // Don't auto-hide for confirmations
          dismissible: false, // Don't allow dismiss with X button
          ...options,
        }
      );
    });
  },

  /**
   * Show a progress alert with optional updating
   * @param {string} message - The alert message
   * @param {Object} options - Additional alert options
   * @returns {Object} Control object with update and complete methods
   */
  progress: (message, options = {}) => {
    if (!window.cloudboxAlerts?.show) {
      console.warn('AlertContainer not mounted yet. Falling back to console log.');
      console.log('[PROGRESS]', message);
      return {
        update: (newMessage, progress) => {
          console.log('[PROGRESS UPDATE]', newMessage, `${Math.round(progress * 100)}%`);
        },
        complete: finalMessage => {
          console.log('[PROGRESS COMPLETE]', finalMessage);
        },
        error: errorMessage => {
          console.error('[PROGRESS ERROR]', errorMessage);
        },
      };
    }

    // Initial progress state
    let progress = options.initialProgress || 0;

    // Create a progress bar component using React.createElement instead of JSX
    const createProgressBar = value => {
      return React.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
            marginTop: '8px',
            overflow: 'hidden',
          },
        },
        React.createElement('div', {
          style: {
            width: `${value * 100}%`,
            height: '100%',
            backgroundColor: options.progressColor || '#4caf50',
            transition: 'width 0.3s ease-in-out',
          },
        })
      );
    };

    // Create the alert with initial progress
    const id = window.cloudboxAlerts.show(
      React.createElement(
        'div',
        null,
        React.createElement('div', null, message),
        createProgressBar(progress)
      ),
      {
        variant: options.variant || 'info',
        withIcon: true,
        autoHideDuration: 0, // Don't auto-hide progress alerts
        dismissible: options.dismissible || false,
        ...options,
      }
    );

    // Return control object
    return {
      /**
       * Update progress alert
       * @param {string} newMessage - Updated message (optional)
       * @param {number} newProgress - Progress value (0-1)
       */
      update: (newMessage, newProgress) => {
        progress = newProgress;
        window.cloudboxAlerts.show(
          React.createElement(
            'div',
            null,
            React.createElement('div', null, newMessage || message),
            createProgressBar(progress)
          ),
          {
            id, // Replace the existing alert
            variant: options.variant || 'info',
            withIcon: true,
            autoHideDuration: 0,
            dismissible: options.dismissible || false,
            ...options,
          }
        );
      },

      /**
       * Complete the progress (success)
       * @param {string} finalMessage - Final success message
       */
      complete: finalMessage => {
        window.cloudboxAlerts.remove(id);
        window.cloudboxAlerts.success(finalMessage || 'Operation completed successfully', {
          autoHideDuration: options.completeDuration || 3000,
          ...options,
        });
      },

      /**
       * Show error and end progress
       * @param {string} errorMessage - Error message
       */
      error: errorMessage => {
        window.cloudboxAlerts.remove(id);
        window.cloudboxAlerts.error(errorMessage || 'Operation failed', {
          autoHideDuration: options.errorDuration || 5000,
          ...options,
        });
      },
    };
  },
};

export default AlertService;
