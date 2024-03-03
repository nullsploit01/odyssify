import LoadingScreen from './components/molecules/loading-screen'
import { environment } from './config/environment'
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/clerk-react'
import { ConfigProvider } from 'antd'
import { StrictMode, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import 'src/index.css'
import { router } from 'src/router'
import { pingServer } from 'src/services/api'
import { appTheme } from 'src/theme'

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
          <ConfigProvider theme={appTheme}>
            <RouterProvider router={router} />
          </ConfigProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </StrictMode>
  )
}

export default App
