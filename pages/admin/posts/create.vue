<template>
	<div class="posts px-3 py-3 ps-0">
		<design-content>
			<div class="d-flex justify-content-between">
				<div>
					<p>Add Post</p>
				</div>
				<div>
					<nuxt-link to="/admin/posts">
						<design-button :has_button_sm="'btn-sm'">Post Lists</design-button>
					</nuxt-link>
				</div>
			</div>

			<div class="add-category mt-2">
				<form @submit.prevent="handleSubmit">
					<design-form type="text" label="Title" v-model="categoryData.name"  :hasError="hasError('name')" :helperText="errorMsg('name')"></design-form>
					<design-form type="select" label="Status" v-model="categoryData.status" :hasError="hasError('status')" :helperText="errorMsg('status')">
						<option value="" selected>Select</option>
					  	<option value="1">Active</option>
					  	<option value="0">Inactive</option>
					</design-form>
					<div class="pt-0">
				  		<design-button><i v-if="loading" class="fas fa-spinner fa-spin me-1 p-1"></i>Save</design-button>
				  	</div>
				</form>
			</div>
		</design-content>
	</div>
</template>

<script>
	import display_errors from '~/mixins/display_errors'
	export default {
		layout: 'admin',
		middleware: "auth",
		data() {
			return {
				categoryData: {
					name: "",
					status: ""
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
					const res = await this.$axios.$post('/api/admin/categories/create', this.categoryData);
					this.loading = false;
					this.$notify.success({
				      message: 'Successfully created new category.'
				    });
				    this.$router.push('/admin/categories');
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