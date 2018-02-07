/**
 * 核心
 * vue/vue-router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 调用

import HelloWorld from '@/components/HelloWorld.vue'
import index from './index/index'
const routes = [
  {
    path: '/',
    component: HelloWorld,
    redirect: '/index'
  },
  ...index
]

/**
 *  路由对象
 */
const router = new VueRouter({
  // 使用配置文件规则
  // mode: 'history',
  routes
})

export default router
