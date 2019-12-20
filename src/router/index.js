import Vue from 'vue'
import VueRouter from 'vue-router'

import Movie from "../views/movie/Movie.vue";
import Index from "../views/Index.vue";
/* 路由懒加载 */
const HotShowing = ()=> import(/* webpackChunkName:"HotShowing" */"../views/movie/components/HotShowing")
import ComingSoon from "../views/movie/components/ComingSoon"
import Theater from "../views/theater/Theater"
import Profile from "../views/profile/Profile"
import City from "../components/City"
import Search from "../components/Search"
import Detail from "../views/detail/Detail"

import Account from "../views/profile/components/Account"
import Phone from "../views/profile/components/Phone"


Vue.use(VueRouter)
const routes = [{
  path: '',
  redirect: '/index/movie/hotshowing',

}, {
  path: '/index',
  component: Index,
  
  children: [{
    path : "movie",
    component : Movie,
    redirect: '/index/movie/hotshowing',
    children : [{
      path : "hotshowing",
      component : HotShowing,
      meta : {
        sort : 1
      }
    },{
      path : "comingsoon",
      component : ComingSoon,
      meta : {
        sort : 2
      }
    }]
  },{
    path : "theater",
    component:Theater
  },{
    path : "profile",
    component : Profile,
    redirect:"/index/profile/account",
    children:[{
      path : "account",
      component : Account
    },{
      path : "phone",
      component : Phone
    }]

  }]

},{
  path : "/city",
  component : City
},{
  path:"/search",
  component:Search
},{
  path:"/detail",
  name :"detail",
  component : Detail
}]


const router = new VueRouter({
  routes
})

export default router