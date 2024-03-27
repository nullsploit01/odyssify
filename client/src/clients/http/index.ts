import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { environment } from 'src/config/environment'
import { useNotification } from 'src/hooks/use-notification'

export const httpClient = axios.create({
  baseURL: environment.API_URL
})

export const HttpInterceptor: FC<PropsWithChildren> = ({ children }) => {
  const { showNotification } = useNotification()
  const [_isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const responseInterceptor = (response: AxiosResponse) => {
      return response
    }

    const getDescription = (data: any) => {
      return typeof data?.error === 'string' ? data.error : 'Something went wrong! Please try again'
    }

    const errorInterceptor = (error: AxiosError) => {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest: {
          showNotification({
            message: 'Bad Request',
            description: getDescription(error.response?.data),
            type: 'error'
          })
          break
        }

        case HttpStatusCode.NotFound: {
          showNotification({
            message: 'Not Found',
            description: getDescription(error.response?.data),
            type: 'error'
          })
          break
        }

        case HttpStatusCode.InternalServerError: {
          showNotification({
            message: 'Internal Server Error',
            description: getDescription(error.response?.data),
            type: 'error'
          })
          break
        }

        default: {
          showNotification({
            message: 'Oops?',
            description: getDescription(error.response?.data),
            type: 'error'
          })
          break
        }
      }

      return Promise.reject(error)
    }

    setIsMounted(true)
    const interceptor = httpClient.interceptors.response.use(responseInterceptor, errorInterceptor)

    return () => httpClient.interceptors.response.eject(interceptor)
  }, [])

  return _isMounted && children
}
