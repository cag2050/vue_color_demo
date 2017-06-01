import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vuecolor from '../components/Vuecolor'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Vuecolor',
          component: Vuecolor
      },
      {
        path: '/hello',
        name: 'Hello',
        component: Hello
      }
  ]
})
