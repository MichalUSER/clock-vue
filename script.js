var app = new Vue({
	el: "#app",
	data: {
		time: "",
		t: null
	},
	methods: {
		setTime() {
			let today = new Date();
			this.time =
				today.getHours() +
				":" +
				today.getMinutes() +
				":" +
				today.getSeconds();
		}
	},
	created() {
		this.t = setInterval(this.setTime, 1000);
		this.setTime();
	}
});
