import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Documentation from '@/views/Documentation';
import MyWall from '@/views/MyWall';
import MyFeed from '@/views/MyFeed';
import Login from '@/views/Login';
import Shop from '@/views/Shop';
import SignUp from '@/views/SignUp';
import Session from '../models/Session';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/documentation', name: 'Doc', component: Documentation },
  { path: '/login', name: 'Login', component: Login },
  { path: '/mywall', name: 'MyWall', component: MyWall },
  { path: '/feed', name: 'MyFeed', component: MyFeed },
  { path: '/Shop', name: 'Shop', component: Shop },
  { path: '/signUp', name: 'SignUp', component: SignUp },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "secondary" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "secondary" */ '../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) =>{
    console.log({ from, to })
    if(to.path == '/mywall' && !Session.user){
     next('/login') 
    }else{
      next();
    }
} )

export default router