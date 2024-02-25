import { Dayjs } from 'dayjs'
import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

interface IDateRange {
  from: Date
  to: Date
}

interface IItinerary {
  location: string
  dateRange: IDateRange
  updateLocation: (location: string) => void
  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => void
}

const itineraryStore = create<IItinerary>((set) => ({
  location: '',
  dateRange: {} as IDateRange,
  updateLocation: (location) => {
    set({ location: location })
  },
  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => {
    if (!dates || dates.length < 2 || !dates[0] || !dates[1]) {
      return
    }

    set({ dateRange: { from: dates[0].toDate(), to: dates[1].toDate() } })
  }
}))

export const useItineraryStore = () =>
  itineraryStore(
    (state) => ({
      location: state.location,
      dateRange: state.dateRange,
      updateLocation: state.updateLocation,
      updateDateRange: state.updateDateRange
    }),
    shallow
  )
