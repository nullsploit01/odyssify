import { vertexAIClient } from 'src/client/vertex-ai'

class ItineraryService {
  getItinerary = async (location: string, numberOfDays: number) => {
    const request = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Plan a ${numberOfDays} day trip to ${location} with timeframes. Generate response in json`
            }
          ]
        }
      ]
    }
    const { response } = await vertexAIClient.generateContent(request)
    return response
  }
}

export const itineraryService = new ItineraryService()
