import { httpClient } from 'src/clients/http'
import { IAutoCompleteAPIResponse } from 'src/types/services'

class GeoService {
  autocomplete = async (query: string, onlyRegions = false) => {
    if (!query?.trim()) {
      return
    }

    return httpClient.get<IAutoCompleteAPIResponse[]>('/geo/autocomplete', {
      params: { query, onlyRegions }
    })
  }
}

export const geoService = new GeoService()
