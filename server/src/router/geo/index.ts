import { Router } from 'express'

import { geoController } from 'src/controllers/geo'

const router = Router()

router.get('/search', geoController.search)

export { router as geoRouter }
