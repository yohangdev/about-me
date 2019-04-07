import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import(/* webpackChunkName: "experiences" */ './views/Experiences.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import(/* webpackChunkName: "skills" */ './views/Skills.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import(/* webpackChunkName: "achievements" */ './views/Achievements.vue')
    },
    {
      path: '/extras',
      name: 'Extras',
      component: () => import(/* webpackChunkName: "extras" */ './views/Extras.vue')
    }
  ]
})
