import Vue from 'vue'
import VueRouter from 'vue-router'
import table from "../components/table";
import biao from "../components/biao";
import search from "../components/search";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table',
    component: table
  },
  {
    path: '/biao',
    name: 'biao',
    component: biao
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
