import { RouteRecordRaw } from 'vue-router'

import { templateViewRoutes } from './templateViews/templateViewRoutes.ts'

export const viewRoutes: RouteRecordRaw[] = [
    ...templateViewRoutes
]