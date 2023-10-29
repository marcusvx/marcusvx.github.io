import './styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import en from '../public/locales/en-us.json'
import pt from '../public/locales/pt-br.json'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

console.log(en)
const i18n = createI18n({
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
