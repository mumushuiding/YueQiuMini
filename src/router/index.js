import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const NewIssue = () => import('@/details/newIssue.vue')
const Test2 = () => import('@/details/test2.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  },
  {
    path: '/newIssue',
    name: 'test1',
    component: NewIssue,
  },
  {
    path: '/test2',
    name: 'test2',
    component: Test2,
  }
  ],
})
