import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Fuck from './components/fuck'

Vue.use(Route)

const routes = [
	{
		path: '/hello-world',
		component: HelloWorld
	},
	{
		path: '/fuck',
		component: Fuck,
		meta: { title: 'fucking page'}
	}
]

// router 是 vue-router 的一个实例
// 实例化的时候，传入一个数组
const router = new Route({
	routes
})
console.log(router)

// 全局守卫是得不到 Vue 的实例的
// 而且先于组件的生命周期函数
router.beforeEach((to, from, next) => {
	console.log('beforeEach', to, from)
	// document.title = to.meta.title || 'other title'
	next()
})

router.beforeResolve((to, from, next) => {
	console.log('beforeResolve', to, from)
	next()
})

router.afterEach((to, from) => {
	console.log('afterEach', to, from)
})

// 也可以在全局mixin，作为生命周期
// 但是，建议放在beforeEach
Vue.mixin({
	beforeCreate () {
		document.title = this.$route.meta.title || '全局mixin实现'
	}
})

export default router
