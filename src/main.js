import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// dopo aver installato e settato il router
// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);

app.mount('#app')
