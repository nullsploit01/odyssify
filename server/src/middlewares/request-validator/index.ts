import { validationResult } from 'express-validator'

import { RequestValidationError } from 'src/errors/request-validation'
import { IRequestValidator } from 'src/types/middlewares'

export const requestValidator: IRequestValidator = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}
