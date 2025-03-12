import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import styles from './Alert.module.css';

/**
 * Alert Component
 *
 * A versatile alert component supporting various styles, icons, and behaviors.
 */
const Alert = ({
  variant = 'primary',
  withIcon = false,
  withBackground = false,
  dismissible = false,
  icon = null,
  children,
  onDismiss = null,
  className = '',
  autoHideDuration = 0,
  position = 'top',
  animation = 'fade',
  iconSet = 'ri', // Supports 'ri' (Remix Icon), 'fa' (Font Awesome), etc.
}) => {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Determine default icon based on variant
  const getDefaultIcon = () => {
    const iconMap = {
      primary: 'information-line',
      secondary: 'information-line',
      success: 'check-line',
      danger: 'close-circle-line',
      warning: 'alert-line',
      info: 'information-line',
      light: 'information-line',
    };

    return iconMap[variant] || 'information-line';
  };

  // Handle dismiss click
  const handleDismiss = useCallback(() => {
    setLeaving(true);

    // Start exit animation
    setTimeout(() => {
      setVisible(false);
      if (onDismiss) onDismiss();
    }, 300); // Match animation duration
  }, [onDismiss]);

  // Handle auto-hide
  useEffect(() => {
    setVisible(true);

    if (autoHideDuration > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, handleDismiss]);

  // If not visible, don't render
  if (!visible) return null;

  // Build class names
  const alertClasses = [
    styles.alert,
    styles[`alert-${variant}`],
    withBackground ? styles[`bg-${variant}`] : '',
    styles[`position-${position}`],
    styles[`animation-${animation}`],
    leaving ? styles.leaving : styles.entering,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={alertClasses} role="alert">
      {withIcon && (
        <div className={styles.alertIcon}>
          <Icon name={icon || getDefaultIcon()} set={iconSet} size="lg" />
        </div>
      )}
      <div className={styles.alertContent}>{children}</div>
      {dismissible && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleDismiss}
          aria-label="Close"
        >
          <Icon name="close-line" set={iconSet} />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  /**
   * Alert style variant
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ]),
  /**
   * Whether to display an icon
   */
  withIcon: PropTypes.bool,
  /**
   * Use colored background instead of colored text
   */
  withBackground: PropTypes.bool,
  /**
   * Whether the alert can be dismissed
   */
  dismissible: PropTypes.bool,
  /**
   * Custom icon class (defaults based on variant)
   */
  icon: PropTypes.string,
  /**
   * Alert content
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function when alert is dismissed
   */
  onDismiss: PropTypes.func,
  /**
   * Additional CSS classes
   */
  className: PropTypes.string,
  /**
   * Auto-hide duration in milliseconds (0 = no auto-hide)
   */
  autoHideDuration: PropTypes.number,
  /**
   * Alert position, used for animations
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  /**
   * Animation type for appearance/disappearance
   */
  animation: PropTypes.oneOf(['fade', 'slide', 'bounce', 'zoom']),
  /**
   * Icon set to use
   */
  iconSet: PropTypes.string,
};

export default Alert;
