<template>
	<div class="fuck">
		fuck page
		<button @click='addRoute'>Add Route</button>
		<router-link to='/b'>to Component B</router-link>
	</div>
</template>

<script>
	import B from './b.vue'
	export default {
		methods: {
			addRoute () {
				// 动态添加路由，可以让路由和权限捆绑
				this.$router.addRoutes(
					[ { path: '/b', component: B } ]
				)
			}
		},
		beforeCreate () {
			console.log('beforeCreate')
		},
		created () {
			console.log('created')
		},
		beforeMount () {
			console.log('beforeMount')
		},
		mounted () {
			console.log('mounted')
		},
		beforeDestroy () {
			console.log('beforeDestroy')
		},
		beforeRouteEnter (to, from, next) {
			console.log('beforeRouteEnter', to, from)
			next()
		},
		// 可用于参数更新的时候
		beforeRouteUpdate (to, from, next) {
			console.log('beforeRouteUpdate', to, from)
			next()
		},
		beforeRouteLeave (to, from, next) {
			console.log('beforeRouteLeave', to, from)
			next()
		}
	}
</script>

<style>
</style>
