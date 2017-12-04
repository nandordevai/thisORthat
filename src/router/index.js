import Vue from 'vue'
import Router from 'vue-router'
import Compare from '@/components/Compare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Compare',
      component: Compare
    }
  ]
})
