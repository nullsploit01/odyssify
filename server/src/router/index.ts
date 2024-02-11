import { Router } from 'express'

import { controller } from 'src/controllers'

const router = Router()

router.get('/ping', controller.ping)

export { router }
