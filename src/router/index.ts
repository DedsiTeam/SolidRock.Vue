import { createRouter, createWebHistory } from 'vue-router'

import { RootRoute } from './rootRoute'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        RootRoute
    ]
})