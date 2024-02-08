import './assets/main.css'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ContextMenu from '@imengyu/vue3-context-menu'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(ContextMenu)

app.mount('#app')
