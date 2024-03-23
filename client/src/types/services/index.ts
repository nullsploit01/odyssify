import { IItinerary } from 'src/types/stores/itinerary'

export interface IItineraryAPIResponse {
  status: number
  itinerary: IItinerary[]
}

export interface IAutoCompleteAPIResponse {
  id: string
  name: string
  secondaryName: string
  types: string[]
}
