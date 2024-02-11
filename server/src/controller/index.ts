import { vertexAIClient } from 'src/client/vertex-ai'
import { IControllerMethod } from 'src/types/controller'

class Controller {
  ping: IControllerMethod = async (req, res, next) => {
    try {
      const request = {
        contents: [{ role: 'user', parts: [{ text: 'How are you doing today?' }] }]
      }

      const resp = await vertexAIClient.generateContent(request)
      return res.json(resp)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()
