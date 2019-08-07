import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Test from '../components/Test.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/hello',
    type: 0,
    component: HelloWorld
  },
  {
    path: '/test',
    type: 1,
    component: Test
  }
]

export function showRouter() {
  console.log('routes_', routes)
}
export const router = new VueRouter({ routes })
