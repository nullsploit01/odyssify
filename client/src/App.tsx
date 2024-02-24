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
      <ConfigProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
