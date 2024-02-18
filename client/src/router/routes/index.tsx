import { RouteObject } from 'react-router-dom'

import HomePage from 'src/pages/home'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  }
]
