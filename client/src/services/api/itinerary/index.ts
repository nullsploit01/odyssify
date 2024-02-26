import { Dayjs } from 'dayjs'

import { httpClient } from 'src/clients/http'
import { IItineraryAPIResponse } from 'src/types/services'

class ItineraryService {
  getItinerary = async (location: string, from: Dayjs, to: Dayjs) => {
    return httpClient.get<IItineraryAPIResponse>('/itinerary', {
      params: {
        location,
        from: from.toDate(),
        to: to.toDate()
      }
    })
  }
}

export const itineraryService = new ItineraryService()
