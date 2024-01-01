export default {
	methods: {
		hasError(key) {
			return Boolean(this.errorMsg(key));
		},
		errorMsg(key) {
			return this.errors[key] !=undefined ? this.errors[key].join(" ") : undefined;
		}
	}
}