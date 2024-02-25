import { RateLimitExceededError } from 'src/errors/rate-limit-exceeded'
import { IRateLimiter } from 'src/types/middlewares'

let quota = {
  accessLimit: 100,
  exhaustedRequests: 0,
  lastResetTimestamp: Date.now()
}

const shouldResetQuota = () => {
  const currentTimestampInSeconds = Math.floor(Date.now() / 1000)
  const lastResetTimestampInSeconds = Math.floor(quota.lastResetTimestamp / 1000)
  const timeDifferenceInSeconds = currentTimestampInSeconds - lastResetTimestampInSeconds
  return timeDifferenceInSeconds > 24 * 60 * 60 * 7 // One Week
}

export const rateLimiter: IRateLimiter = (req, res, next) => {
  if (shouldResetQuota()) {
    quota.exhaustedRequests = 0
    quota.lastResetTimestamp = Date.now()
  }

  if (quota.exhaustedRequests >= quota.accessLimit) {
    throw new RateLimitExceededError('Request Quota has been exhausted. Try again tomorrow!')
  }

  quota.exhaustedRequests += 1

  next()
}
