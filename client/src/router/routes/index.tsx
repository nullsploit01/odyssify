import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const HomePage = lazy(() => import('src/pages/home'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  }
]
