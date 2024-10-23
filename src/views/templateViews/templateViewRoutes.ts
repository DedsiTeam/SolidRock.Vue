import { RouteRecordRaw } from 'vue-router'

export const templateViewRoutes: RouteRecordRaw[] = [
    {
        path: 'templateView/dataTable',
        name: 'templateViewDataTable',
        component: () => import('./dataTable/index.vue'),
    },
    {
        path: 'templateView/dataForm',
        name: 'templateViewDataForm',
        component: () => import('./dataForm/index.vue'),
    }
]
