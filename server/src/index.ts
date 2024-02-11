import express from 'express'

import { environment } from 'src/config/environment'
import { errorLogger, httpLogger, logger } from 'src/config/logger'
import { NotFoundError } from 'src/errors/not-found'
import { errorHandler } from 'src/middlewares/error-handler'
import { router } from 'src/router'

const app = express()

app.use(httpLogger)
app.use(errorLogger)
app.use(express.json())

app.use(router)

app.use('*', () => {
  throw new NotFoundError()
})

app.listen(environment.PORT, () => {
  logger.info(`Server listening on port ${environment.PORT}`)
})

app.use(errorHandler)
