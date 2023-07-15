import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faIdCard, faUser, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import './style.css'

library.add(faBagShopping, faIdCard, faUser, faIdBadge)

const app = createApp(App)

app.use(createPinia())

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
