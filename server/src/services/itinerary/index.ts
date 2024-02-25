import { vertexAIClient } from 'src/client/vertex-ai'
import { BadRequestError } from 'src/errors/bad-request'
import { NotFoundError } from 'src/errors/not-found'

class ItineraryService {
  getItinerary = async (location: string, from: Date, to: Date) => {
    const request = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Plan a trip to ${location} from ${from} to ${to}. 
                    Generate response in json of format. If location is not valid return status 400, if not found return status 404, else 200.
                    {status: value, itinerary: [{day: value (Name of Day, Month DD YYYY), activities: [{name: value, location: value, description: value, time: value}]}`
            }
          ]
        }
      ]
    }
    const { response } = await vertexAIClient.generateContent(request)
    const parsedResponse = await response

    let itinerary = ''
    parsedResponse.candidates.map((candidate) => {
      if (candidate && candidate.content?.parts.length) {
        candidate.content.parts.map((part) => {
          itinerary += part.text?.replace('json', '')
        })
      }
    })

    return this.validateItinerary(itinerary)
  }

  private validateItinerary = (itinerary: any) => {
    itinerary = JSON.parse(itinerary.replace(/```/g, ''))

    switch (itinerary.status) {
      case 400:
        throw new BadRequestError('Location is invalid')

      case 404:
        throw new NotFoundError('Location not found')

      default:
        break
    }

    return itinerary
  }
}

export const itineraryService = new ItineraryService()
