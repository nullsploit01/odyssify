import { Router } from 'express'
import { query } from 'express-validator'

import { controller } from 'src/controllers'
import { requestValidator } from 'src/middlewares/request-validator'

const router = Router()

router.get('/ping', controller.ping)

router.get(
  '/itinerary',
  [
    query('location').notEmpty().withMessage('location query param is required'),
    query('days').notEmpty().withMessage('days query param is required')
  ],
  requestValidator,
  controller.getItinerary
)

export { router }
