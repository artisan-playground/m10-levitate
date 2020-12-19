import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home')),
  },
    Parking: {
    path: '/Parking',
    exact: true,
    component: lazy(() => import('../pages/Parking')),
  },
}