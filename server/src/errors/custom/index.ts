import { IErrorResponse } from 'src/types/errors'

export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeErrors(): IErrorResponse
}
