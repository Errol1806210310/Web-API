import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from "../components/Table.vue";
import aaa from "../components/aaa.vue";
import Fy from "../components/Fy.vue";
import Search from "../components/Search.vue";
import Home from "../components/Home.vue";
import mapchinacomp from "../components/mapchinacomp.vue";
Vue.use(VueRouter)

const routes = [{
		path: '/Home',
		name: 'Home',
		component: Home
	},
	{
		path: '/Table',
		name: 'Table',
		component: Table
	},
	{
		path: '/mapchinacomp',
		name: 'mapchinacomp',
		component: mapchinacomp
	},
	{
		path: '/Fy',
		name: 'Fy',
		component: Fy
	},
	{
		path: '/aaa',
		name: 'aaa',
		component: aaa
	},
	{
		path: '/Search',
		name: 'Search',
		component: Search
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
