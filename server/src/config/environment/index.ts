import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

if (!process.env.PROJECT_ID || !process.env.PROJECT_LOCATION) {
  throw new Error('Google project config is not defined')
}

export const environment = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  GOOGLE_PROJECT_ID: process.env.PROJECT_ID,
  GOOGLE_PROJECT_LOCATION: process.env.PROJECT_LOCATION,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN
}
