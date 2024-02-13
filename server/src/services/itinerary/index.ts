import { vertexAIClient } from 'src/client/vertex-ai'

class ItineraryService {
  getItinerary = async (location: string, numberOfDays: string) => {
    const request = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Plan a ${numberOfDays} day trip to ${location} with timeframes. Generate response in json.`
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
    return JSON.parse(itinerary)
  }
}

export const itineraryService = new ItineraryService()
