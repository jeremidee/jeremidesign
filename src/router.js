import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/works',
      name: 'works',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Works.vue'),
      // children:[
        
      // ]
    },
    {
      path:'/works/lesenphants',
      name:'lesenphants',
      component: () => import(/* webpackChunkName: "about" */ './views/works/Lesenphants.vue'),
      works: 'lesenphants',
      // beforeEnter: (to, from, next) => {
      //   console.log('lesenphants beforeEnter');
      // }
    },
    {
      path:'/works/politics',
      name:'politics',
      component: () => import(/* webpackChunkName: "about" */ './views/works/politics.vue'),
      works: 'politics',
    },
    {
      path:'/works/mobileFirst',
      name:'mobileFirst',
      component: () => import(/* webpackChunkName: "about" */ './views/works/mobileFirst.vue'),
      works: 'mobileFirst'
    },
    {
      path:'/works/banking',
      name:'banking',
      component: () => import(/* webpackChunkName: "about" */ './views/works/banking.vue'),
      works: 'banking'
    },
    {
      path:'/works/subs',
      name:'subs',
      component: () => import(/* webpackChunkName: "about" */ './views/works/subs.vue'),
      works: 'subs'
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});



