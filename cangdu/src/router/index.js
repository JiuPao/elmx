import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
    },
    {
      path: '/headers',
      name: 'headers',
      component: resolve => require(['@/components/headers'], resolve),
    },
    {
      path: '/city',
      name: 'city',
      component: resolve => require(['@/components/city'], resolve),
    },
    {
      path: '/msite',
      name: 'msite',
      component: resolve => require(['@/components/msite'], resolve),
      children: [
        {
          path: 'minmsite',
          name: 'minmsite',
          component: resolve => require(['@/components/minmsite'], resolve),
        },
        {
          path: 'search',
          name: 'search',
          component: resolve => require(['@/components/search'], resolve),
        },
        {
          path: 'order',
          name: 'order',
          component: resolve => require(['@/components/order'], resolve),
        },
        {
          path: 'profile',
          name: 'profile',
          component: resolve => require(['@/components/profile'], resolve),
        }
      ],
      redirect: '/msite/minmsite'
    },
    {
      path:'/food',
      name:'food',
      component: resolve => require(['@/components/food'], resolve),
    }
  ]
})
