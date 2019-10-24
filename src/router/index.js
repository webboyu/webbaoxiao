import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'home',
    component: () => import('@/views/Home'),
    children: [{
        path: '/',
        redirect: '/homepage'
      },
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import('@/views/HomePage'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/bxgl',
    name: 'bxgl',
    component: () => import('@/views/BXGL'),
    children:[
      {
        path:'/bxgl',
        redirect:'/bxgl/injihua'
      },
      {
        path:'injihua',
        name:'injihua',
        component:()=>import('@/components/InJiHua')
      },
      {
        path:'outjihua',
        name:'outjihua',
        component:()=>import('@/components/OutJiHua')
      }
    ]
  },
  {
    path:'/detailbx',
    name:'detailbx',
    component:()=> import('@/views/DetailBX')
  },
  {
    path:'/addinbx',
    name:'addinbx',
    component:() => import('@/views/AddInBX')
  }

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