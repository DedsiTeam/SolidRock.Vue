import type { App } from 'vue'

import * as components from './components.ts'
export * from './components.ts'

const componentPrefix = 'sr'

export default {
    install(app: App) {
        const componentAny: any = components;
        Object.keys(componentAny).forEach((key: string) => {
            app.component(componentPrefix + '-' + componentAny[key].name, componentAny[key])
        })
    }
}
