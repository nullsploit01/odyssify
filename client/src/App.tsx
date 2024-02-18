import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'

import 'src/index.css'
import { router } from 'src/router'
import { appTheme } from 'src/theme'

const App = () => {
  return (
    <ConfigProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
