import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import LoadingScreen from 'src/components/molecules/loading-screen'

const App = lazy(() => import('src/App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<LoadingScreen show />}>
    <App />
  </Suspense>
)
