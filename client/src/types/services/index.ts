import { IItinerary } from 'src/types/stores'

export interface IItineraryAPIResponse {
  status: number
  itinerary: IItinerary[]
}
