import { PATHS } from './paths'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import PlanPage from 'src/pages/plan'

const HomePage = lazy(() => import('src/pages/home'))

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME_PAGE,
    element: <HomePage />
  },
  {
    path: PATHS.PLAN_PAGE,
    element: <PlanPage />
  }
]
