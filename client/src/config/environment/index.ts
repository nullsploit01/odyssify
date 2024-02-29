if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export const environment = {
  API_URL: import.meta.env.VITE_API_URL,
  PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
}
