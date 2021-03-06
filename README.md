# 构建路由

1. 设置路由，稍后用于测试

router\index.js

```
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const Test1 = () => import('@/detail/test1.vue')
const Test2 = () => import('@/detail/test2.vue')
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
    path: '/test1',
    name: 'test1',
    component: Test1,
  },
  {
    path: '/test2',
    name: 'test2',
    component: Test2,
  }
],
})
```

2. 构建tab路由"# YueQiuMini" 
