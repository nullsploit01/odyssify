import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'

import App from 'src/App.tsx'
import 'src/index.css'
import { appTheme } from 'src/theme/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={appTheme}>
    <App />
  </ConfigProvider>
)
