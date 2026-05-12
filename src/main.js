import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'

//Vue toastification
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
    timeout: 3000,
    position: 'top-right'
});

app.mount('#app')
