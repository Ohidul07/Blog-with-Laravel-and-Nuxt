<template>
	<div>
		<button class="btn px-4"
		:class="{ 'form-control' : has_form_control, 'btn-sm': has_button_sm, 'rounded-pill': has_radius_shape}" 
		@click="handleClick">
			<slot />
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			has_form_control: {
				type: String,
				default: '',
				required: false
			},
			has_button_sm: {
				type: String,
				default: '',
				required: false
			},
			has_radius_shape: {
				type: String,
				default: '',
				required: false
			},
		},
		methods: {
		    handleClick() {
		      this.$emit('click');
		    },
		}
	}
</script>

<style scoped>
	button, button:hover, button:active, button:focus {
		background: #92278f;
		color: #fff;
	}

</style>