import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'local'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

if (!process.env.GOOGLE_PROJECT_ID || !process.env.GOOGLE_PROJECT_LOCATION) {
  throw new Error('Google project config is not defined')
}

export const environment = {
  PORT: process.env.PORT || 5001,
  NODE_ENV: process.env.NODE_ENV || 'local',
  GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
  GOOGLE_PROJECT_LOCATION: process.env.GOOGLE_PROJECT_LOCATION,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN
}
