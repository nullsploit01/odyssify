import { PlaceAutocompleteResponseData } from '@googlemaps/google-maps-services-js'

import { googleMapsClient } from 'src/client/google-maps'
import { IAutoComplete } from 'src/types/models/geo'

class GeoService {
  autoComplete = async (query: string) => {
    const { data } = await googleMapsClient.autoComplete(query)
    return this.mapAutocompleteResponse(data)
  }

  private mapAutocompleteResponse = (response: PlaceAutocompleteResponseData) => {
    const autocompleteResponse: IAutoComplete[] = []

    response.predictions.map((prediction) => {
      autocompleteResponse.push({
        id: prediction.place_id,
        name: prediction.description,
        secondaryName: prediction.structured_formatting.secondary_text,
        types: prediction.types
      })
    })

    return autocompleteResponse
  }
}

export const geoService = new GeoService()
