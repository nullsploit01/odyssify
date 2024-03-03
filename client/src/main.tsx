import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const App = lazy(() => import('src/App'))
const LoadingScreen = lazy(() => import('src/components/molecules/loading-screen'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<LoadingScreen show />}>
    <App />
  </Suspense>
)
