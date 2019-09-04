import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router'
import HelloWorld from './components/HelloWorld.vue'
import HelloChildren from './components/HelloChildren.vue'
// import Test from './components/Test.vue'
Vue.config.productionTip = false
const activesRoute = [
  {
    path: '/hello',
    type: 0,
    component: HelloWorld,
    children: [
      {
        path: 'children',
        component: HelloChildren
      }
    ]
  }
]
router.addRoutes(activesRoute)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// console.log('router_', router)
// console.log('all_app_', a)
