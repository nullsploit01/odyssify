import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

import 'src/index.css'
import { router } from 'src/router'
import { appTheme } from 'src/theme'

const App = () => {
  return (
    <StrictMode>
      <ConfigProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
