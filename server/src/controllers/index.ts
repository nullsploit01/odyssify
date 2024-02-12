import { IControllerMethod } from 'src/types/controllers'

class Controller {
  ping: IControllerMethod = async (req, res, next) => {
    try {
      return res.json({ message: 'pong' })
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()
