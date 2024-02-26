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
  from: Date
  to: Date
}

export interface IItineraryStore {
  location: string
  dateRange: IItineraryDateRange
  itinerary: IItinerary[]
  loading: boolean
  isInvalid: boolean
  updateLocation: (location: string) => void
  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => void
  updateItinerary: () => void
}
