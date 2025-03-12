/**
 * Minimal post-install script for react-cloudbox-alerts
 * Shows a brief thank you message after installation
 */

// Only run in interactive terminals (skip CI, non-TTY)
if (!process.env.CI && !process.env.GITHUB_ACTIONS && process.stdout.isTTY) {
  // Set a maximum timeout to ensure it doesn't hang installation
  const timeoutId = setTimeout(() => {
    // Exit silently after 500ms
    process.exit(0);
  }, 500);
  
  // Try to show a minimal message
  try {
    const message = `
 ☁️  Thanks for installing react-cloudbox-alerts!
    GitHub: https://github.com/kenzycodex/react-cloudbox-alerts
`;
    console.log(message);
    
    // Clear timeout since we're done
    clearTimeout(timeoutId);
  } catch (error) {
    // Just exit silently on error
    clearTimeout(timeoutId);
  }
}