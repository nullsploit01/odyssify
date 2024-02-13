import { NextFunction, Request, Response } from 'express'

export interface IErrorHandlerMiddleware {
  (err: Error, req: Request, res: Response, next: NextFunction): Response
}

export interface IRequestValidator {
  (req: Request, res: Response, next: NextFunction): void
}
