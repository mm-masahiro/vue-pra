//ルートとなるVueインスタンスを作成する
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello, World!!',
		count: 1,
		list: ["apple", "bannana", "melon"],
		show: true
		// show: false
	},
	methods: {
		handleClick: function(event) {
			alert(event.target)
		}
	}
})
