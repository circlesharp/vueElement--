console.log(1233)

const loadingPulgin = {
	install: function	(vm) {
		const LoadingComponent = vm.extend({
			name: 'LoadingComponent',
			template: '<div id="loading-wrapper">{{msg}}</div>',
			props: {
				msg: {
					type: String,
					default: 'loading...'
				}
			}
		})
		let Loading = (msg) => {
			const div = document.createElement('div')
			div.setAttribute('id', 'loading-wrapper--dd')
			document.body.append(div)
			new LoadingComponent({
				props: {
					msg: {
						type: String,
						default: msg
					}
				}
			}).$mount('#loading-wrapper--dd') // 挂载过去之后，会把它覆盖掉
			return () => { // 返回一个隐藏的方法，太秀了
				document.body.removeChild(document.getElementById('loading-wrapper'))
			}
		}
		vm.prototype.$loading = Loading
	}
}

// export default loadingPulgin
