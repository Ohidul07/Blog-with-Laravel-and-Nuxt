<template>
	<div class="mt-3">
		<design-whitebox>
			<div class="login-form">
				<div class="text-center">
					<img src="~/assets/images/logo.png" height="65px" width="65px">
					<p class="mb-0">Logged in your account</p>
				</div>
				<div class="mt-4 px-3">
					<form @submit.prevent="handleSubmit">
						<design-form label="Email" type="email" v-model="formData.email" :hasError="hasError('email')" :helperText="errorMsg('email')" ></design-form>
						<design-form label="Password" type="password" v-model="formData.password" :hasError="hasError('password')" :helperText="errorMsg('password')" ></design-form>

					  	<div class="pt-0">
					  		<design-button :has_form_control="'form-control'"><i v-if="loading" class="fas fa-spinner fa-spin me-1 p-1"></i>Login</design-button>
					  	</div>
					  	<div  class="mb-2 pt-2 d-flex">
					  		<span>Don't have account ?</span>
					  		<span class="ps-2"><nuxt-link to="/auth/register">Register</nuxt-link> here</span>
					  	</div>
					</form>
				</div>
			</div>
		</design-whitebox>	
	</div>
</template>

<script>
	import display_errors from '~/mixins/display_errors'
	export default {
		layout: 'adminFullWidth',
		data() {
			return {
				formData: {
					email: '',
					password: ''
				},
				loading: false,
				errors: {}
			}
		},
		mixins: [display_errors],
		middleware: "auth",
		methods: {
			async handleSubmit() {

				this.errors = {};
                this.loading = true;
                await this.$auth.loginWith('local', { data: this.formData })
                .then(res=> {
            		this.$notify.success({
            	      message: 'Successfully logged in.'
            	    });
                })
			}
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}	
</style>