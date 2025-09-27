import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/app.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/github-dark.css'

app.use(VueHighlightJS)