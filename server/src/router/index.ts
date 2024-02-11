import { Router } from 'express'

import { controller } from 'src/controller'

const router = Router()

router.get('/ping', controller.ping)

export { router }
