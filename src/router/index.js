import Vue from 'vue'
import Router from 'vue-router'
import inputTest from '@/test/inputTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inputTest',
      name: 'inputTest',
      component: inputTest
    }
  ]
})
