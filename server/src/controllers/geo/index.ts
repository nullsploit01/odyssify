import { googleMapsClient } from 'src/client/google-maps'
import { BadRequestError } from 'src/errors/bad-request'
import { IControllerMethod } from 'src/types/controllers'

class GeoController {
  autocomplete: IControllerMethod = async (req, res, next) => {
    try {
      const { query } = req.query

      if (!query) {
        throw new BadRequestError('Invalid Request Params')
      }

      const { data } = await googleMapsClient.autoComplete(query.toString())
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

export const geoController = new GeoController()
