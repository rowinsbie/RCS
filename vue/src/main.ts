import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import Interceptor from './Interceptor';

createApp(App)
.use(Interceptor)
.use(router)
.mount('#app')
