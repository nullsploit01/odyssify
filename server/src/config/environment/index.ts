import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

if (!process.env.PROJECT_ID || !process.env.PROJECT_LOCATION) {
  throw new Error('Project config is not defined')
}

export const environment = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PROJECT_ID: process.env.PROJECT_ID,
  PROJECT_LOCATION: process.env.PROJECT_LOCATION,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
  GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY
}
