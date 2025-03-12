# Contributing to React Cloudbox Alerts

Thank you for considering contributing to React Cloudbox Alerts! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Versioning](#versioning)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/kenzycodex/react-cloudbox-alerts.git
   cd react-cloudbox-alerts
   ```
3. **Add the original repository as an upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/react-cloudbox-alerts.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

1. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. **Make your changes** and write tests if applicable.

3. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```

4. **Run linting** to ensure code quality:
   ```bash
   npm run lint
   ```

5. **Format your code**:
   ```bash
   npm run format
   ```

6. **Build the library** to ensure it builds correctly:
   ```bash
   npm run build
   ```

7. **Run Storybook** to visually test your changes:
   ```bash
   npm run storybook
   ```

8. **Commit your changes** following the [Conventional Commits](https://www.conventionalcommits.org/) standard:
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: address bug issue"
   ```

9. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

10. **Submit a pull request** from your fork to the original repository.

## Pull Request Process

1. Ensure all tests pass and linting is clean.
2. Update the README.md with details of changes if applicable.
3. Update the CHANGELOG.md if applicable.
4. The pull request will be merged once it receives approval from maintainers.

## Coding Standards

We follow these coding standards:

- Use ESLint and Prettier for code formatting.
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Write clear, self-documenting code with meaningful variable and function names.
- Keep functions small and focused on a single task.
- Include JSDoc comments for public APIs.

## Testing

We value well-tested code:

- Write unit tests for new functionality.
- Ensure existing tests pass when fixing bugs.
- Aim for high test coverage, but prioritize meaningful tests over coverage percentage.
- Test edge cases and error conditions.

## Documentation

Good documentation is crucial:

- Document all public APIs with JSDoc comments.
- Keep the README and other documentation up-to-date.
- Include Storybook stories for components.
- Document props, options, and return values.

## Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes (X.y.z)
- **MINOR** version for adding functionality in a backwards compatible manner (x.Y.z)
- **PATCH** version for backwards compatible bug fixes (x.y.Z)

## Thank You!

Your contributions are greatly appreciated. By following these guidelines, you help maintain the quality and usability of this project for everyone.