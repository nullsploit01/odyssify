import { httpClient } from 'src/clients/http'

class ItineraryService {
  getItinerary = async (location: string, from: Date, to: Date) => {
    return httpClient.get('/itinerary', {
      params: {
        location,
        from,
        to
      }
    })
  }
}

export const itineraryService = new ItineraryService()
