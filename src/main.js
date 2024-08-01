// main.js
import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store/store'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(store)
app.mount('#app')
