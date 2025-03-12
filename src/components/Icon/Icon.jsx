import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon Component
 *
 * Renders icons from different icon sets (Remix Icon, Font Awesome, etc.)
 */
const Icon = ({
  name = '',
  set = 'ri',
  size = 'md',
  color = 'currentColor',
  className = '',
  ...props
}) => {
  // Calculate size in pixels or use predefined size classes
  const getSize = () => {
    const sizeMap = {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
    };

    return sizeMap[size] || size;
  };

  // Parse the icon name based on the set
  const getIconClass = () => {
    if (set === 'ri') {
      return `ri-${name}`;
    }
    if (set === 'fa') {
      // Determine if it's a regular, solid, or brand icon
      const prefix = name.startsWith('fab-') ? 'fab' : name.startsWith('far-') ? 'far' : 'fas';
      const iconName = name.replace(/^(fab|far|fas)-/, '');
      return `${prefix} fa-${iconName}`;
    }

    return name;
  };

  return (
    <i
      className={`${getIconClass()} ${className}`}
      style={{
        fontSize: getSize(),
        color: color,
        ...props.style,
      }}
      {...props}
    />
  );
};

Icon.propTypes = {
  /**
   * Icon name (e.g. 'alert-line' for Remix Icon, 'info-circle' for Font Awesome)
   */
  name: PropTypes.string.isRequired,
  /**
   * Icon set to use (e.g., 'ri' for Remix Icon, 'fa' for Font Awesome)
   */
  set: PropTypes.oneOf(['ri', 'fa']),
  /**
   * Icon size (predefined or CSS value)
   */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    PropTypes.string,
  ]),
  /**
   * Icon color
   */
  color: PropTypes.string,
  /**
   * Additional CSS class
   */
  className: PropTypes.string,
  /**
   * Additional props
   */
  style: PropTypes.object,
};

export default Icon;
