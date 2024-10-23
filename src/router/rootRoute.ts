const LayoutDefault = () => import('@/layouts/index.vue')

import { viewRoutes } from '@/views/viewRoutes.ts'

export const RootRoute = {
    path: '/',
    name: 'Layout',
    component: LayoutDefault,
    children: [
        ...viewRoutes
    ]
}