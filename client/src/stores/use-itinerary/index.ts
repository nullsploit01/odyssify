import { Dayjs } from 'dayjs'
import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

import { itineraryService } from 'src/services/api/itinerary'
import { IItineraryDateRange, IItineraryStore } from 'src/types/stores'

const itineraryStore = create<IItineraryStore>((set, get) => ({
  location: '',
  itinerary: [],
  dateRange: {} as IItineraryDateRange,
  loading: false,
  isInvalid: false,

  updateLocation: (location) => {
    set({ location: location })
  },

  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => {
    if (!dates || dates.length < 2 || !dates[0] || !dates[1]) {
      return
    }

    set({ dateRange: { from: dates[0].toDate(), to: dates[1].toDate() } })
  },

  updateItinerary: async () => {
    const { location, dateRange } = get()

    if (!location || !dateRange || !dateRange.from || !dateRange.to) {
      set({ isInvalid: true })
      return
    }

    set({ loading: true })

    itineraryService
      .getItinerary(location, dateRange.from, dateRange.to)
      .then(({ data }) => {
        set({ itinerary: data.itinerary })
      })
      .finally(() => set({ loading: false }))
  }
}))

export const useItineraryStore = () =>
  itineraryStore(
    (state) => ({
      location: state.location,
      dateRange: state.dateRange,
      itinerary: state.itinerary,
      loading: state.loading,
      isInvalid: state.isInvalid,
      updateLocation: state.updateLocation,
      updateDateRange: state.updateDateRange,
      updateItinerary: state.updateItinerary
    }),
    shallow
  )
