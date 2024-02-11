import express from 'express'

import { environment } from 'src/config/environment'
import { errorLogger, httpLogger, logger } from 'src/config/logger'
import { router } from 'src/router'

const app = express()

app.use(httpLogger)
app.use(errorLogger)
app.use(express.json())

app.use(router)

app.listen(environment.PORT, () => {
  logger.info(`Server listening on port ${environment.PORT}`)
})
