import { IControllerMethod } from 'src/types/controller'

class Controller {
  ping: IControllerMethod = async (req, res, next) => {
    try {
      return res.json('pong')
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()
