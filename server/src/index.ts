import express from 'express'

import { corsConfig } from 'src/config/cors'
import { environment } from 'src/config/environment'
import { errorLogger, httpLogger, logger } from 'src/config/logger'
import { NotFoundError } from 'src/errors/not-found'
import { errorHandler } from 'src/middlewares/error-handler'
import { geoRouter } from 'src/router/geo'
import { itineraryRouter } from 'src/router/itinerary'

const app = express()

app.use(corsConfig())
app.use(httpLogger)
app.use(errorLogger)
app.use(express.json())

app.use('/itinerary', itineraryRouter)
app.use('/geo', geoRouter)

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' })
})

app.use('*', () => {
  throw new NotFoundError()
})

app.listen(environment.PORT, () => {
  logger.info(`Server listening on port ${environment.PORT}`)
})

app.use(errorHandler)
