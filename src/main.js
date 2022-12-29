import { createApp, VueElement } from 'vue'
import App from './App.vue'
import api from './services/api.js'
import store from './store/store'

VueElement.prototype.$http = api
createApp(App).use(store).mount('#app')

// new VueElement({
//     el: '#app',
//     store,
//     render: h => h(App)
// })