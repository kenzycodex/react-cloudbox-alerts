# Publishing Guide for React Cloudbox Alerts

This guide covers the process of publishing your React Cloudbox Alerts library to npm, updating versions, and managing releases.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Publishing Process](#publishing-process)
- [Versioning](#versioning)
- [Automated Publishing with GitHub Actions](#automated-publishing-with-github-actions)
- [Manual Publishing](#manual-publishing)
- [Releasing New Versions](#releasing-new-versions)

## Prerequisites

1. **npm Account**: Create an [npm account](https://www.npmjs.com/signup) if you don't have one.
2. **GitHub Account**: Create a [GitHub account](https://github.com/join) for hosting your code.
3. **Local Setup**: Ensure you have Node.js and npm installed locally.

## Publishing Process

### Initial Setup

1. **Login to npm** in your terminal:
   ```bash
   npm login
   ```
   Enter your npm username, password, and email when prompted.

2. **Verify your package.json** is properly configured:
   ```json
   {
     "name": "react-cloudbox-alerts",
     "version": "0.1.0",
     "description": "A flexible and customizable alert system for React applications",
     "main": "dist/index.js",
     "module": "dist/index.esm.js",
     "types": "dist/index.d.ts",
     "files": ["dist"],
     "repository": {
       "type": "git",
       "url": "git+https://github.com/kenzycodex/react-cloudbox-alerts.git"
     },
     "keywords": ["react", "component", "alert", "notification"],
     "author": "Kenzy Codex",
     "license": "MIT"
   }
   ```

3. **Create an .npmignore file** to exclude unnecessary files:
   ```
   src/
   .storybook/
   stories/
   tests/
   .github/
   .babelrc
   .eslintrc
   rollup.config.js
   jest.config.js
   ```

## Versioning

We follow [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** version (1.0.0): Incompatible API changes
- **MINOR** version (0.1.0): New functionality in a backward-compatible manner
- **PATCH** version (0.0.1): Backward-compatible bug fixes

To update your package version:

```bash
# Patch update (0.1.0 -> 0.1.1)
npm version patch

# Minor update (0.1.0 -> 0.2.0)
npm version minor

# Major update (0.1.0 -> 2.0.0)
npm version major
```

These commands automatically:
1. Update the version in `package.json`
2. Create a git commit with the version
3. Create a git tag for the version

## Automated Publishing with GitHub Actions

We've set up GitHub Actions to automatically publish new versions when you create a new tag:

1. **Push your changes** to GitHub:
   ```bash
   git push && git push --tags
   ```

2. **Creating a release on GitHub**:
   - Go to your repository on GitHub
   - Navigate to "Releases"
   - Click "Create a new release"
   - Select your tag
   - Add release notes
   - Publish the release

3. **GitHub Actions** will automatically:
   - Run tests
   - Build the package
   - Publish to npm
   - Deploy Storybook to GitHub Pages

### Setting Up Secrets

For automated publishing, you need to set up an npm token:

1. Create an npm token:
   ```bash
   npm token create
   ```