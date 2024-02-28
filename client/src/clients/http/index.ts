import axios from 'axios'

import { environment } from 'src/config/environment'

export const httpClient = axios.create({
  baseURL: environment.API_URL
})
