import { CustomError } from '../custom'
import { ValidationError } from 'express-validator'

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters')
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return {
      error: this.errors.map((error) => {
        return { message: error.msg }
      }),
      code: 'INVALID_REQUEST'
    }
  }
}
