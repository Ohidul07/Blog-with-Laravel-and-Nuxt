<template>
	<div class="tags px-3 py-3 ps-0">
		<design-content>
			<div class="d-flex justify-content-between">
				<div>
					<p>Edit Tag</p>
				</div>
				<div>
					<nuxt-link to="/admin/tags">
						<design-button :has_button_sm="'btn-sm'">Tag Lists</design-button>
					</nuxt-link>
				</div>
			</div>

			<div class="add-tag mt-2">
				<form @submit.prevent="handleSubmit">
					<design-form type="text" label="Tag Name" v-model="tagData.name"  :hasError="hasError('name')" :helperText="errorMsg('name')"></design-form>
					<design-form type="select" label="Status" v-model="tagData.status" :hasError="hasError('status')" :helperText="errorMsg('status')">
						<option value="" selected>Select</option>
					  	<option value="1">Active</option>
					  	<option value="0">Inactive</option>
					</design-form>
					<div class="pt-0">
				  		<design-button><i v-if="loading" class="fas fa-spinner fa-spin me-1 p-1"></i>Update</design-button>
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
				tagData: {
					name: "",
					status: ""
				},
				loading: false,
				errors: {}
			}
		},
		mixins: [display_errors],
		async mounted() {
	    	const tagId = this.$route.params.id;
	      	await this.loadTagDetails(tagId);
	    },
	    methods: {
	    	async loadTagDetails(tagId) {
		        try {
		        	const res = await this.$axios.$get(`/api/admin/tags/edit/${tagId}`);
		          	this.tagData = {
		            	name: res.data.name,
		            	status: res.data.status
		          	}
		        } catch (e) {
		          // Handle error
		        }
		    },
		    async handleSubmit() {

		    	try {
		    		this.loading = true;
		    		const tagId = this.$route.params.id;
		    		const res = await this.$axios.$put(`/api/admin/tags/${tagId}`, this.tagData);
          			this.loading = false;
		    		this.$notify.success({
		    	      message: 'Successfully updated tag.'
		    	    });
		    	    this.$router.push('/admin/tags');
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