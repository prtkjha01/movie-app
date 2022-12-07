import { createApp, VueElement } from 'vue'
import App from './App.vue'
import api from './services/api.js'

VueElement.prototype.$http = api
createApp(App).mount('#app')