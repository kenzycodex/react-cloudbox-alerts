/**
 * Post-install script for react-cloudbox-alerts
 * Shows a thank you message and helpful information after installation
 */

// Simpler condition that works more reliably across environments
// Only skip if explicitly in CI or if DEBUG is disabled
if (!process.env.CI && !process.env.GITHUB_ACTIONS) {
  try {
    // Get package information - using a more reliable path approach
    const packageJson = require('../package.json');
    const version = packageJson.version || '0.2.3';
    const author = packageJson.author || 'Kenzy Codex';
    const repoUrl = packageJson.repository && packageJson.repository.url 
      ? packageJson.repository.url.replace('git+', '').replace('.git', '')
      : 'https://github.com/kenzycodex/react-cloudbox-alerts';
    const issuesUrl = packageJson.bugs && packageJson.bugs.url
      ? packageJson.bugs.url
      : `${repoUrl}/issues`;
    
    // Define some ANSI color codes for colorful output
    const colors = {
      blue: '\x1b[34m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      cyan: '\x1b[36m',
      magenta: '\x1b[35m',
      bold: '\x1b[1m',
      reset: '\x1b[0m'
    };
    
    // Simplified message that's more reliable and still has dynamic values
    const message = `
${colors.cyan}${colors.bold}    ☁️  REACT CLOUDBOX ALERTS v${version} ${colors.reset}
    
${colors.blue}    ╭──────────────────────────────────────────╮${colors.reset}
${colors.blue}    │                                          │${colors.reset}
${colors.blue}    │  ${colors.yellow}${colors.bold}Thanks for installing react-cloudbox-alerts!${colors.reset}${colors.blue}  │${colors.reset}
${colors.blue}    │                                          │${colors.reset}
${colors.blue}    │  ${colors.green}• GitHub: ${colors.cyan}${repoUrl}${colors.reset}${colors.blue}     │${colors.reset}
${colors.blue}    │  ${colors.green}• Issues: ${colors.cyan}${issuesUrl}${colors.reset}${colors.blue}    │${colors.reset}
${colors.blue}    │                                          │${colors.reset}
${colors.blue}    │  ${colors.magenta}Made with ❤️  by ${author}${colors.reset}${colors.blue}               │${colors.reset}
${colors.blue}    │                                          │${colors.reset}
${colors.blue}    ╰──────────────────────────────────────────╯${colors.reset}
`;
    
    // Use both console.log and stderr.write to maximize chances of visibility
    console.log(message);
    
    // Also try writing directly to stderr as a backup method
    try {
      process.stderr.write(message + '\n');
    } catch (e) {
      // Ignore errors from stderr write
    }
  } catch (error) {
    // Silently exit on error - never break installation because of a message
    console.error('Note: Post-install message failed to display, but installation completed successfully.');
  }
}