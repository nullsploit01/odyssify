import { environment } from './config/environment'
import { ClerkProvider } from '@clerk/clerk-react'
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
      <ClerkProvider publishableKey={environment.PUBLISHABLE_KEY}>
        <ConfigProvider theme={appTheme}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </ClerkProvider>
    </StrictMode>
  )
}

export default App
