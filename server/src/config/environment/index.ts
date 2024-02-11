import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

export const environment = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  GOOGLE_PROJECT_ID: 'odyssify',
  GOOGLE_PROJECT_LOCATION: 'us-central1',
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN
}
