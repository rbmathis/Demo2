// 12-Factor App Configuration
// All configuration comes from environment variables

const config = {
  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '5000', 10),
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Demo2 App',
    env: import.meta.env.VITE_APP_ENV || 'development',
  },
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    debug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  },
};

export default config;
