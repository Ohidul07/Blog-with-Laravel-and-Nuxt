<template>
	<div class="mt-3">
		<design-whitebox>
			<div class="register-form">
				<div class="text-center">
					<img src="~/assets/images/logo.png" height="65px" width="65px">
					<p class="mb-0">Create your account</p>
				</div>
				<div class="mt-4 px-3">
					<form @submit.prevent="handleSubmit">
						<design-form label="Name" type="text" v-model="formData.name" :helperText="errorMsg('name')" :hasError="hasError('name')" ></design-form>
						<design-form label="Email" type="email" v-model="formData.email" :helperText="errorMsg('email')" :hasError="hasError('email')" ></design-form>
						<design-form label="Password" type="password" v-model="formData.password" :helperText="errorMsg('password')" :hasError="hasError('password')" ></design-form>
						<design-form label="Password Confirmation" type="password" v-model="formData.password_confirmation" :helperText="errorMsg('password_confirmation')" :hasError="hasError('password_confirmation')" ></design-form>
					  	<div class="pt-0">
					  		<design-button :has_form_control="'form-control'"><i v-if="loading" class="fas fa-spinner fa-spin me-1 p-1"></i>Register</design-button>
					  	</div>
					  	<div  class="mb-2 pt-2 d-flex">
					  		<span>Already have account ?</span>
					  		<span class="ps-2"><nuxt-link to="/auth/login">Login</nuxt-link></span>
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
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				},
				loading: false,
				errors: {}
			}
		},
		mixins: [display_errors],
		methods: {
			async handleSubmit() {
				try {

					this.loading = true;
					const res = await this.$axios.$post('/api/admin/register', this.formData);
					this.loading = false;
					this.$notify.success({
				      message: 'Successfully created new account.'
				    });
				    this.loading = false;
				    this.$router.push('/admin/login');

				} catch(e) {

					this.$notify.error({
				      message: e.response.data?.message
				    });
					this.errors = e.response.data?.errors || {};
					this.loading = false;
				}
			}
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}	
</style>