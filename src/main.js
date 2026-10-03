import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons.js'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/public-sans'
import './styles.css'
import App from './App.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('FaIcon', FontAwesomeIcon)
app.mount('#app')
