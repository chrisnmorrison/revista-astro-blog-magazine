# Contributing to Revista

Thank you for your interest in contributing to Revista! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/chrisnmorrison/revista-astro-blog-magazine/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, etc.)

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with:
   - A clear description of the feature
   - Why it would be useful
   - Potential implementation approach (if you have ideas)

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style (use Prettier)
   - Add comments for complex logic
   - Update documentation if needed
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your changes"
   ```
   Use clear, descriptive commit messages.

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots if UI changes are involved

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Make your changes and test them locally

## Code Style

- Use TypeScript for new utilities
- Use Astro for static components (when possible)
- Use React only for interactive components
- Follow existing code patterns
- Run Prettier before committing:
  ```bash
  npm run format
  ```

## Project Structure

- `src/utils/` - Utility functions (TypeScript)
- `src/components/` - React and Astro components
- `src/pages/` - Page routes
- `src/content/` - MDX content files
- `src/layouts/` - Layout components

## Areas for Contribution

- Documentation improvements
- Bug fixes
- Performance optimizations
- New features
- Accessibility improvements
- Test coverage
- TypeScript type improvements

Thank you for contributing to Revista! 🎉
