# Wellness Check

A React TypeScript application for wellness tracking and management.

## Prerequisites

- Node.js 20.0.0 or higher
- npm (comes with Node.js)

### Installing/Upgrading Node.js

**Check your current version:**
```bash
node -v
```

**If you need to install or upgrade Node.js:**
- **Download from official site:** [nodejs.org](https://nodejs.org/en/download) 
- **Using Node Version Manager (nvm):** [Installation guide](https://github.com/nvm-sh/nvm#installing-and-updating)

  ```bash
  # Install latest LTS version
  nvm install --lts
  nvm use --lts
  ```

## Getting Started

### Installation

1. Clone the repository and change into it
2. Install dependencies:
   ```bash
   npm install
   ```

After cloning and running `npm install`, the development workflow is automatically set up. No additional configuration needed - just start coding and committing!

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`


## Development Workflow

### Code Quality

This project uses automated code formatting and linting to ensure consistent code style across all contributors:

- **Prettier** - Automatic code formatting
- **ESLint** - Code quality and best practices
- **Husky + lint-staged** - Pre-commit hooks

### What happens when you commit:

1. Staged files are automatically formatted with Prettier
2. ESLint runs and fixes auto-fixable issues
3. If there are unfixable linting errors, the commit is blocked
4. Your local files are updated with the formatting changes

### Manual code quality commands:

```bash
npm run format        # Format all files
npm run format:check  # Check if files are formatted
npm run lint          # Run ESLint
```


### Commit Messages (Recommended)

Consider using [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for clear project history:

```bash
feat: add user dashboard
feat: enhance login validation
fix: resolve navigation bug
chore: update dependencies
docs: improve setup instructions
```

**Common prefixes:**
- `feat:` - new features or enhancements to app functionality
- `fix:` - bug fixes for the application
- `docs:` - changes to documentation
- `style:` - formatting changes, missing semicolons, no code logic changes
- `refactor:` - code improvements without changing functionality
- `test:` - adding or updating tests
- `chore:` - maintenance tasks like updating dependencies or build tools

This helps maintain a clean, readable git history that's valuable for learning and collaboration.

## Project Structure

```
src/
  components/    ->   Reusable UI components
  pages/         ->   Page-level components
  styles/        ->   Global styles
  utils/         ->   Utility functions
  App.tsx        ->   Main app component
  main.tsx       ->   App entry point
```
