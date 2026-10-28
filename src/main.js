import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css";
import router from './router/index.js';
import { createPinia } from "pinia";

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')


