import Vue from 'vue'
import App from './pages/App'
import router from  './router/index'
import store from  './store/index'
import './material/index'
import('babel-polyfill')
import '@/firebase/'

Vue.config.productionTip = false

// let app = ''

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
