<template>
	<div class="tags px-3 py-3 ps-0">
		<design-content>
			<div class="d-flex justify-content-between">
				<div>
					<p>Tags List</p>
				</div>
				<div>
					<nuxt-link to="/admin/tags/create">
						<design-button :has_button_sm="'btn-sm'">Add Tag</design-button>
					</nuxt-link>
				</div>
			</div>

			<div class="lists mt-2">
				<table class="table table-striped">
				  	<thead>
					    <tr class="table-success">
					    	<th scope="col">Sl No</th>
					      	<th scope="col">Tag Name</th>
					      	<th scope="col" class="text-center">Status</th>
					      	<th scope="col" class="text-center">Action</th>
					    </tr>
				  	</thead>
				  	<tbody>
					    <tr v-for="(tag, index) in tags" :key="index">
					    	<td>{{ index + 1 }}</td>
					      	<td>{{ tag.name }}</td>
					      	<td class="text-center">
						    	<i v-if="tag.status === 1" class="fa-solid fa-circle-check text-success"></i>
						    	<i v-if="tag.status === 0" class="fa-solid fa-circle-xmark text-danger"></i>
						    </td>
					      	<td class="text-center">
					      		<nuxt-link :to="`/admin/tags/edit/${tag.id}`">
						      		<button class="btn btn-primary btn-sm"><i class="fa-solid fa-pen-to-square"></i></button>
						      	</nuxt-link>
					      		<button class="btn btn-danger btn-sm" @click="deleteTag(tag.id)"><i class="fa-solid fa-eraser"></i></button>
					      	</td>
					    </tr>
				  	</tbody>
				</table>
			</div>

			<nav v-if="pagination.totalPages > 1" aria-label="Page navigation">
		        <ul class="pagination justify-content-end">
		          <li class="page-item" :class="{ disabled: pagination.currentPage === 1 }">
		            <button class="page-link" @click="loadtags(pagination.currentPage - 1)" :disabled="pagination.currentPage === 1">
		            	<span aria-hidden="true">&laquo;</span>
		            </button>
		          </li>

		          <li class="page-item" v-for="page in pagination.totalPages" :key="page" :class="{ active: pagination.currentPage === page }">
		            <button class="page-link" @click="loadtags(page)">{{ page }}</button>
		          </li>

		          <li class="page-item" :class="{ disabled: pagination.currentPage === pagination.totalPages }">
		            <button class="page-link" @click="loadtags(pagination.currentPage + 1)" :disabled="pagination.currentPage === pagination.totalPages">
		            	<span aria-hidden="true">&raquo;</span>
		            </button>
		          </li>
		        </ul>
		    </nav>
		</design-content>
	</div>
</template>

<script>
	export default {
		layout: 'admin',
		middleware: "auth",
		data() {
			return {
				tags: [],
				pagination: {
			        currentPage: 1,
			        totalPages: 1
			    }
			}
		},
		mounted() {
			this.loadTags();
		},
		methods: {

			async loadTags(page = 1) {

				await this.$axios.$get(`/api/admin/tags?page=${page}`)
				.then(res => {
					this.tags = res.data;
					this.pagination.currentPage = res.meta.current_page;
          			this.pagination.totalPages = res.meta.last_page;
				})
			},

			async deleteTag(tagId) {
				
		    	const confirmed = confirm("Are you sure you want to delete this tag?");

		      	if (confirmed) {
		        	try {

		          		await this.$axios.$delete(`/api/admin/tags/${tagId}`);
		          		this.$notify.success({
			            	message: "Tag deleted successfully.",
			          	});
		          		
		          		this.loadTags(this.pagination.currentPage);

			        } catch (error) {
			          	this.$notify.error({
			            	message: "Error deleting tag.",
			          	});
			        }
		      	}
		    }
		}
	}
</script>