import Vue from 'vue'
import Router from 'vue-router'
import WelcomeHome from '@/components/WelcomeHome'
import MoviesHome from '@/components/MoviesHome'
import SearchHome from '@/components/SearchHome'
import LoginHome from '@/components/LoginHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WelcomeHome
    },
    {
      path: '/movies',
      component: MoviesHome
    },
    {
      path: '/search',
      component: SearchHome
    },
    {
      path: '/login',
      component: LoginHome
    },
    {
      path: '*',
      component: WelcomeHome
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
