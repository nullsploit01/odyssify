import { Client } from '@googlemaps/google-maps-services-js'

import { environment } from 'src/config/environment'

const client = new Client({})

class GoogleMapsClient {
  textSearch = async (query: string) => {
    return client.textSearch({
      params: {
        query,
        key: environment.GOOGLE_PLACES_API_KEY
      }
    })
  }

  autoComplete = async (text: string) => {
    return client.placeAutocomplete({
      params: {
        key: environment.GOOGLE_PLACES_API_KEY,
        input: text
      }
    })
  }
}

export const googleMapsClient = new GoogleMapsClient()
