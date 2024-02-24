import cors from 'cors'

import { environment } from 'src/config/environment'
import { BadRequestError } from 'src/errors/bad-request'

export const corsConfig = () =>
  cors({
    origin(requestOrigin, callback) {
      const allowUndefinedOrigin = environment.NODE_ENV === 'local' && !requestOrigin

      if (allowUndefinedOrigin || requestOrigin === environment.ALLOWED_ORIGIN) {
        return callback(null, true)
      }

      const errorMsg =
        'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new BadRequestError(errorMsg), false)
    }
  })
