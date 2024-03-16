import { BadRequestError } from 'src/errors/bad-request'
import { geoService } from 'src/services/geo'
import { IControllerMethod } from 'src/types/controllers'

class GeoController {
  autocomplete: IControllerMethod = async (req, res, next) => {
    try {
      const { query } = req.query

      if (!query) {
        throw new BadRequestError('Invalid Request Params')
      }

      const autoCompleteResponse = await geoService.autoComplete(query.toString())
      return res.send(autoCompleteResponse)
    } catch (error) {
      next(error)
    }
  }
}

export const geoController = new GeoController()
