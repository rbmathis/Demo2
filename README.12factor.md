# 12-Factor App Compliance

This application follows the [12-Factor App](https://12factor.net/) methodology:

## 1. Codebase
- ✅ Single codebase tracked in Git, multiple deploys possible

## 2. Dependencies
- ✅ Dependencies explicitly declared in `package.json`
- ✅ Use `npm install` to install all dependencies
- ✅ No reliance on system-wide packages

## 3. Config
- ✅ Configuration stored in environment variables
- ✅ See `.env.example` for required variables
- ✅ Copy `.env.example` to `.env` for local development
- ✅ All config accessed through `src/config.js`

## 4. Backing Services
- ✅ API and other services configured via environment variables
- ✅ Services treated as attached resources

## 5. Build, Release, Run
- ✅ Strict separation via npm scripts:
  - Build: `npm run build`
  - Run (dev): `npm run dev`
  - Run (prod): `npm run preview`

## 6. Processes
- ✅ App is stateless
- ✅ React SPA with no server-side session state
- ✅ Any persistent data stored in backing services

## 7. Port Binding
- ✅ Vite dev server binds to port (default 5173)
- ✅ Production build served via static hosting

## 8. Concurrency
- ✅ Horizontally scalable static assets
- ✅ Can run multiple instances behind load balancer

## 9. Disposability
- ✅ Fast startup with Vite
- ✅ Graceful shutdown built into Vite dev server

## 10. Dev/Prod Parity
- ✅ Same build process for all environments
- ✅ Environment-specific config via env vars
- ✅ Use `.env` for local, environment variables in production

## 11. Logs
- ✅ Logs written to stdout (console)
- ✅ No log files or log routing in app
- ✅ Environment handles log aggregation

## 12. Admin Processes
- ✅ One-off admin tasks run via npm scripts
- ✅ Same codebase and environment

## Environment Variables

All configuration is done via environment variables prefixed with `VITE_`:

- `VITE_API_URL` - API endpoint URL
- `VITE_API_TIMEOUT` - API request timeout (ms)
- `VITE_APP_NAME` - Application name
- `VITE_APP_ENV` - Environment (development/production)
- `VITE_ENABLE_ANALYTICS` - Enable analytics (true/false)
- `VITE_ENABLE_DEBUG` - Enable debug mode (true/false)

## Getting Started

1. Copy `.env.example` to `.env`
2. Adjust environment variables as needed
3. Run `npm install`
4. Run `npm run dev` for development
5. Run `npm run build` for production build
