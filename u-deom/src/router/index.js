import Vue from 'vue'
import VueRouter from 'vue-router'
import { addGoods } from './modules/goods.js'
import { addUser } from './modules/user.js'

Vue.use(VueRouter)

const routes = [...addGoods, ...addUser]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
