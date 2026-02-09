# Demo2 App

A React single-page application built with Vite that demonstrates [12-Factor App](https://12factor.net/) configuration principles. All runtime settings are loaded from environment variables via Vite's built-in `.env` support and centralised in a single config module.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (included with Node.js)

## Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd demo2

# Copy the example environment file
cp .env.example .env

# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev
```

### Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start Vite dev server with HMR           |
| `npm run build`     | Production build to `dist/`              |
| `npm run preview`   | Serve the production build locally       |
| `npm run lint`      | Run ESLint across the project            |

### Environment Variables

All configuration is managed through `VITE_`-prefixed environment variables.
See [`.env.example`](.env.example) for the full list and defaults.

| Variable                 | Description                | Default                       |
| ------------------------ | -------------------------- | ----------------------------- |
| `VITE_API_URL`           | API endpoint URL           | `http://localhost:3000/api`   |
| `VITE_API_TIMEOUT`       | API request timeout (ms)   | `5000`                        |
| `VITE_APP_NAME`          | Application display name   | `Demo2 App`                   |
| `VITE_APP_ENV`           | Environment name           | `development`                 |
| `VITE_ENABLE_ANALYTICS`  | Enable analytics           | `false`                       |
| `VITE_ENABLE_DEBUG`      | Enable debug mode          | `true`                        |

For more details on how these align with the 12-Factor methodology, see [`README.12factor.md`](README.12factor.md).

## Testing

> **Note:** No test framework is currently configured. Contributions to add a test suite (e.g., [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)) are welcome.

## Architecture

```
├── index.html            # HTML entry point
├── public/               # Static assets served as-is
├── src/
│   ├── main.jsx          # React root – renders <App /> into #root
│   ├── App.jsx           # Main application component
│   ├── App.css           # Component styles
│   ├── config.js         # Centralised env-var config (12-Factor III)
│   ├── index.css         # Global styles
│   └── assets/           # Bundled static assets (images, SVGs)
├── .env.example          # Template for environment variables
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint flat config
└── package.json          # Dependencies and scripts
```

`src/config.js` is the single source of truth for all runtime configuration. It reads `import.meta.env` values and provides sensible defaults, so components never access environment variables directly.

## Contributing

1. Create a feature branch from `master` (`git checkout -b feature/my-change`).
2. Make your changes and ensure `npm run lint` passes.
3. Commit with a clear, descriptive message.
4. Open a pull request against `master`.

### Code Style

- JavaScript (JSX) — enforced by ESLint with the `react-hooks` and `react-refresh` plugins.
- Keep components small and focused.
- All configuration must go through `src/config.js` — do not read `import.meta.env` elsewhere.
