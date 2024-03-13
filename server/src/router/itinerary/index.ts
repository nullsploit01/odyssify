import { Router } from 'express'
import { query } from 'express-validator'

import { itineraryController } from 'src/controllers/itinerary'
import { rateLimiter } from 'src/middlewares/rate-limiter'
import { requestValidator } from 'src/middlewares/request-validator'

const router = Router()

router.get(
  '/',
  [
    query('location').notEmpty().withMessage('location query param is required'),
    query('from').notEmpty().withMessage('from query param is required').isISO8601().toDate(),
    query('to').notEmpty().withMessage('to query param is required').isISO8601().toDate()
  ],
  requestValidator,
  rateLimiter,
  itineraryController.getItinerary
)

export { router as itineraryRouter }
