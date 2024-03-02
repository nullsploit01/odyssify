import { IItinerary } from 'src/types/stores/itinerary'

export interface IItineraryAPIResponse {
  status: number
  itinerary: IItinerary[]
}
