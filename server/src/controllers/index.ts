import { BadRequestError } from 'src/errors/bad-request'
import { itineraryService } from 'src/services/itinerary'
import { IControllerMethod } from 'src/types/controllers'

class Controller {
  ping: IControllerMethod = async (req, res, next) => {
    try {
      return res.json({ message: 'pong' })
    } catch (error) {
      next(error)
    }
  }

  getItinerary: IControllerMethod = async (req, res, next) => {
    try {
      const { location, from, to } = req.query

      if (!location || !from || !to) {
        throw new BadRequestError('Invalid Request Params')
      }

      const itinerary = await itineraryService.getItinerary(
        location.toString(),
        new Date(from.toString()),
        new Date(to.toString())
      )
      return res.json(itinerary)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()
