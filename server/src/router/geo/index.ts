import { Router } from 'express'
import { query } from 'express-validator'

import { geoController } from 'src/controllers/geo'
import { requestValidator } from 'src/middlewares/request-validator'

const router = Router()

router.get(
  '/autocomplete',
  [query('query').notEmpty().withMessage('search query is required')],
  requestValidator,
  geoController.autocomplete
)

export { router as geoRouter }
