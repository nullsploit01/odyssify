import express from 'express'

import { environment } from 'src/config/environment'
import { logger } from 'src/config/logger'
import { router } from 'src/router'

const app = express()

app.use(router)

app.listen(environment.PORT, () => {
  logger.info(`Server listening on port ${environment.PORT}`)
})
