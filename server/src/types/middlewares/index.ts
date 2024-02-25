import { NextFunction, Request, Response } from 'express'

export interface IErrorHandler {
  (err: Error, req: Request, res: Response, next: NextFunction): Response
}

export interface IRequestValidator {
  (req: Request, res: Response, next: NextFunction): void
}

export interface IRateLimiter {
  (req: Request, res: Response, next: NextFunction): void
}
