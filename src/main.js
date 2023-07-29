import './assets/style.css'

import { createApp } from 'vue'
import sto from "./store/index.js";

import App from './App.vue'
const app = createApp(App)
app.use(sto)
app.mount('#app')
 
// const [name,age ] = someFUN()
// const {name,age } = someFUN()