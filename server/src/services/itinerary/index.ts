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
                    Generate response in json of format 
                    {itinerary: [{day: value (Name of Day, Month DD YYYY), activities: [{name: value, location: value, description: value, time: value}]}`
            }
          ]
        }
      ]
    }
    const { response } = await vertexAIClient.generateContent(request)
    let itinerary = ''
    const parsedResponse = await response

    parsedResponse.candidates.map((candidate) => {
      if (candidate && candidate.content?.parts.length) {
        candidate.content.parts.map((part) => {
          itinerary += part.text?.replace('json', '')
        })
      }
    })

    itinerary = itinerary.replace(/```/g, '')
    try {
      return JSON.parse(itinerary)
    } catch (error) {
      return itinerary
    }
  }
}

export const itineraryService = new ItineraryService()
