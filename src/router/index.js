import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'home',
    component: () => import('@/views/Home'),
    // children:[
    //   {
    //     path:'homepage',
    //     name:'homepage',
    //     component:()=> import('@/view/HomePage') 
    //   }
    // ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const excludeRoute = ['/login'];

// router.beforeEach((to, from, next) => {
//   if (excludeRoute.findIndex(v => v === to.path) < 0) {
//       next({
//         path:'/login'
//       })
//   }
//   next()
// })

export default router