import { vertexAIClient } from 'src/client/vertex-ai'

class ItineraryService {
  getItinerary = async (location: string, from: Date, to: Date) => {
    const request = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Plan a trip to ${location} from ${from} to ${to}. 
                    Generate response in json of format. If location is not valid/found return status 400 else 200.
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

    return JSON.parse(itinerary.replace(/```/g, ''))
  }
}

export const itineraryService = new ItineraryService()
