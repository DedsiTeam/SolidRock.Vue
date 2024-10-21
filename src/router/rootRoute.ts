const LayoutDefault = () => import('@/layouts/index.vue')


export const RootRoute = {
    path: '/',
    name: 'Layout',
    component: LayoutDefault,
    children: [

    ]
}