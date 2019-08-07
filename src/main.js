import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router'
Vue.config.productionTip = false


const a = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
console.log('router_', router)
console.log('all_app_', a)
