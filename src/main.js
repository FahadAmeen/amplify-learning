import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

import App from './App.vue'
import router from './router'

Amplify.configure(awsExports)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
