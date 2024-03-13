import { IControllerMethod } from 'src/types/controllers'

class GeoController {
  search: IControllerMethod = (req, res, next) => {
    try {
      return res.send('search')
    } catch (error) {
      next(error)
    }
  }
}

export const geoController = new GeoController()
