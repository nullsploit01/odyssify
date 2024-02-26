import { httpClient } from 'src/clients/http'
import { IItineraryAPIResponse } from 'src/types/services'

class ItineraryService {
  getItinerary = async (location: string, from: Date, to: Date) => {
    return httpClient.get<IItineraryAPIResponse>('/itinerary', {
      params: {
        location,
        from,
        to
      }
    })
  }
}

export const itineraryService = new ItineraryService()
