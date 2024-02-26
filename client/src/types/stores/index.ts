import { Dayjs } from 'dayjs'

export interface IItineraryActivity {
  name: string
  location: string
  description: string
  time: string
}

export interface IItinerary {
  day: string
  activities: IItineraryActivity[]
}

export interface IItineraryDateRange {
  from: Dayjs
  to: Dayjs
}

export interface IItineraryValidation {
  location: boolean
  dateRange: boolean
}

export interface IItineraryStore {
  location: string
  loading: boolean
  isInvalid: IItineraryValidation
  itinerary: IItinerary[]
  dateRange: IItineraryDateRange
  updateItinerary: () => void
  updateLocation: (location: string) => void
  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => void
}
