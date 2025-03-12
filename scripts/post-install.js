/**
 * Post-install script for react-cloudbox-alerts
 * Shows a thank you message and helpful information after installation
 */

// Check if we're in a development environment (avoid showing message during development)
if (process.env.npm_config_production !== 'false' && !process.env.CI && !process.env.GITHUB_ACTIONS) {
  try {
    const packageJson = require('../package.json');
    const version = packageJson.version;
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
      red: '\x1b[31m',
      bold: '\x1b[1m',
      reset: '\x1b[0m'
    };
    
    // Customizable message content
    const messageConfig = {
      title: `REACT CLOUDBOX ALERTS v${version}`,
      tagline: `Thanks for installing react-cloudbox-alerts!`,
      madeBy: `Made with ❤️ by ${author}`,
      links: [
        { label: 'Documentation', url: 'README.md' },
        { label: 'GitHub', url: repoUrl },
        { label: 'Issues', url: issuesUrl }
      ],
      quickStartCode: `import { AlertContainer, AlertService } from 'react-cloudbox-alerts'`,
      quickStartUsage: `// Add <AlertContainer /> to your app
// Then use AlertService.success('Your message!')`
    };
    
    // Function to center text in a given width
    const centerText = (text, width) => {
      const padding = Math.max(0, width - text.length);
      const leftPad = Math.floor(padding / 2);
      return ' '.repeat(leftPad) + text + ' '.repeat(padding - leftPad);
    };
    
    // Determine the box width based on content
    const boxWidth = 60;
    
    // Build the message
    let message = '\n';
    
    // Title
    message += `${colors.cyan}${colors.bold}    ☁️  ${messageConfig.title} ${colors.reset}\n\n`;
    
    // Box top
    message += `${colors.blue}    ╭${'─'.repeat(boxWidth - 10)}╮${colors.reset}\n`;
    
    // Tagline
    message += `${colors.blue}    │${' '.repeat(boxWidth - 10)}│${colors.reset}\n`;
    message += `${colors.blue}    │  ${colors.yellow}${colors.bold}${messageConfig.tagline}${colors.reset}${' '.repeat(boxWidth - 10 - messageConfig.tagline.length - 4)}${colors.blue}  │${colors.reset}\n`;
    message += `${colors.blue}    │${' '.repeat(boxWidth - 10)}│${colors.reset}\n`;
    
    // Links
    messageConfig.links.forEach(link => {
      const linkText = `${colors.green}• ${link.label}: ${colors.cyan}${colors.bold}${link.url}${colors.reset}`;
      const padding = boxWidth - 10 - link.label.length - link.url.length - 4;
      message += `${colors.blue}    │  ${linkText}${' '.repeat(Math.max(0, padding))}${colors.blue}  │${colors.reset}\n`;
    });
    
    // Made by
    message += `${colors.blue}    │${' '.repeat(boxWidth - 10)}│${colors.reset}\n`;
    message += `${colors.blue}    │  ${colors.magenta}${messageConfig.madeBy}${colors.reset}${' '.repeat(boxWidth - 10 - messageConfig.madeBy.length - 4)}${colors.blue}  │${colors.reset}\n`;
    message += `${colors.blue}    │${' '.repeat(boxWidth - 10)}│${colors.reset}\n`;
    
    // Quick start
    message += `${colors.blue}    │  ${colors.magenta}Quick Start:${colors.reset}${' '.repeat(boxWidth - 10 - 'Quick Start:'.length - 4)}${colors.blue}  │${colors.reset}\n`;
    message += `${colors.blue}    │  ${colors.yellow}${messageConfig.quickStartCode}${colors.reset}${' '.repeat(Math.max(0, boxWidth - 10 - messageConfig.quickStartCode.length - 4))}${colors.blue}  │${colors.reset}\n`;
    message += `${colors.blue}    │  ${colors.yellow}${messageConfig.quickStartUsage.split('\n')[0]}${colors.reset}${' '.repeat(Math.max(0, boxWidth - 10 - messageConfig.quickStartUsage.split('\n')[0].length - 4))}${colors.blue}  │${colors.reset}\n`;
    
    if (messageConfig.quickStartUsage.split('\n').length > 1) {
      message += `${colors.blue}    │  ${colors.yellow}${messageConfig.quickStartUsage.split('\n')[1]}${colors.reset}${' '.repeat(Math.max(0, boxWidth - 10 - messageConfig.quickStartUsage.split('\n')[1].length - 4))}${colors.blue}  │${colors.reset}\n`;
    }
    
    // Box bottom
    message += `${colors.blue}    │${' '.repeat(boxWidth - 10)}│${colors.reset}\n`;
    message += `${colors.blue}    ╰${'─'.repeat(boxWidth - 10)}╯${colors.reset}\n`;
    
    console.log(message);
  } catch (error) {
    // Silently exit on error - never break installation because of a message
  }
}