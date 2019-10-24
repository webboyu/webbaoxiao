import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import './styles.scss'

Vue.use(ElementUI)

import '@/plugins/vant'

import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')