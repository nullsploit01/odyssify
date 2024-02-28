import { Dayjs } from 'dayjs'
import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

import { itineraryService } from 'src/services/api/itinerary'
import { IItineraryDateRange, IItineraryStore, IItineraryValidation } from 'src/types/stores'

const itineraryStore = create<IItineraryStore>((set, get) => ({
  location: '',
  itinerary: [],
  dateRange: {} as IItineraryDateRange,
  loading: false,
  isInvalid: {} as IItineraryValidation,

  updateLocation: (location) => {
    set({ location: location, isInvalid: {} as IItineraryValidation })
  },

  updateDateRange: (dates: [Dayjs | null, Dayjs | null]) => {
    if (!dates || dates.length < 2 || !dates[0] || !dates[1]) {
      return
    }

    set({ dateRange: { from: dates[0], to: dates[1] }, isInvalid: {} as IItineraryValidation })
  },

  updateItinerary: async () => {
    const { location, dateRange } = get()

    if (!location || !dateRange || !dateRange.from || !dateRange.to) {
      set({
        isInvalid: {
          location: !location?.trim(),
          dateRange: !dateRange || !dateRange.from || !dateRange.to
        }
      })
      return
    }

    set({ loading: true, itinerary: [] })

    itineraryService
      .getItinerary(location, dateRange.from, dateRange.to)
      .then(({ data }) => {
        set({ itinerary: data.itinerary })
      })
      .finally(() =>
        set({
          loading: false,
          location: '',
          dateRange: {} as IItineraryDateRange,
          isInvalid: {} as IItineraryValidation
        })
      )
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
