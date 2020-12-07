import {createApp} from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production')
    ? 'http://localhost:3000'
    : 'https://api.your-domain:port'

createApp(App)
    .use(router)
    .mount('#app')
