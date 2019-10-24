import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'currentWeather',
    component: resolve => require(['@/modules/currentWeather/CurrentWeather.vue'], resolve),
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: resolve => require(['@/modules/forecast/Forecast.vue'], resolve),
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'is-active'
})

export default router