import { httpClient } from 'src/clients/http'

export const pingServer = async () => {
  return await httpClient.get('/ping')
}
