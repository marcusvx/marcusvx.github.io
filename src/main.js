import './styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import en from './locales/en-us.json'
import pt from './locales/pt-br.json'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'pt',
  messages: {
    en,
    pt
  }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
