import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'

import globalAxios from './plugins/axios'
import './plugins/globalComponents'
import './utils/filters'

import './assets/style/main.scss'

import vuetify from './plugins/vuetify'

Vue.use(VueAxios, globalAxios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
