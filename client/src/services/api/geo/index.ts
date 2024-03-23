import { httpClient } from 'src/clients/http'
import { IAutoCompleteAPIResponse } from 'src/types/services'

class GeoService {
  autocomplete = async (query: string) => {
    if (!query?.trim()) {
      return
    }

    return httpClient.get<IAutoCompleteAPIResponse[]>('/geo/autocomplete', { params: { query } })
  }
}

export const geoService = new GeoService()
