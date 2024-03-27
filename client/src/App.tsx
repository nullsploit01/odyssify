import { HttpInterceptor } from './clients/http'
import { NotificationProvider } from './context-provider/notification'
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/clerk-react'
import { ConfigProvider } from 'antd'
import { lazy, StrictMode, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { environment } from 'src/config/environment'
import 'src/index.scss'
import { router } from 'src/router'
import { pingServer } from 'src/services/api'
import { appTheme } from 'src/theme'

const LoadingScreen = lazy(() => import('src/components/molecules/loading-screen'))

const App = () => {
  useEffect(() => {
    pingServer()
  }, [])

  return (
    <StrictMode>
      <ClerkProvider publishableKey={environment.CLERK_PUBLISHABLE_KEY}>
        <ClerkLoading>
          <LoadingScreen show />
        </ClerkLoading>
        <ClerkLoaded>
          <NotificationProvider>
            <HttpInterceptor>
              <ConfigProvider theme={appTheme}>
                <RouterProvider router={router} />
              </ConfigProvider>
            </HttpInterceptor>
          </NotificationProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </StrictMode>
  )
}

export default App
