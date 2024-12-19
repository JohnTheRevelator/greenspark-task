import '@fontsource/cabin'
import '@fontsource/cabin/400.css'
import '@fontsource/cabin/400-italic.css'
import '@fontsource/cabin/500.css'
import '@fontsource/cabin/500-italic.css'
import '@fontsource/cabin/600.css'
import '@fontsource/cabin/600-italic.css'
import '@fontsource/cabin/700.css'
import '@fontsource/cabin/700-italic.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
