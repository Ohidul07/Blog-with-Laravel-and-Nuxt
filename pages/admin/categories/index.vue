<template>
	<div class="categories px-3 py-3 ps-0">
		<design-content>
			<div class="d-flex justify-content-between">
				<div>
					<p>Categories List</p>
				</div>
				<div>
					<nuxt-link to="/admin/categories/create">
						<design-button :has_button_sm="'btn-sm'">Add Category</design-button>
					</nuxt-link>
				</div>
			</div>

			<div class="lists mt-2">
				<table class="table table-striped">
				  	<thead>
					    <tr class="table-success">
					    	<th scope="col">Sl No</th>
					      	<th scope="col">Category Name</th>
					      	<th scope="col" class="text-center">Status</th>
					      	<th scope="col" class="text-center">Action</th>
					    </tr>
				  	</thead>
				  	<tbody>
					    <tr v-for="(category, index) in categories" :key="index">
					    	<td>{{ index + 1 }}</td>
					      	<td>{{ category.name }}</td>
					      	<td class="text-center">
						    	<i v-if="category.status === 1" class="fa-solid fa-circle-check text-success"></i>
						    	<i v-if="category.status === 0" class="fa-solid fa-circle-xmark text-danger"></i>
						    </td>
					      	<td class="text-center">
					      		<nuxt-link :to="`/admin/categories/edit/${category.id}`">
						      		<button class="btn btn-primary btn-sm"><i class="fa-solid fa-pen-to-square"></i></button>
						      	</nuxt-link>
					      		<button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)"><i class="fa-solid fa-eraser"></i></button>
					      	</td>
					    </tr>
				  	</tbody>
				</table>
			</div>

			<nav v-if="pagination.totalPages > 1" aria-label="Page navigation">
		        <ul class="pagination justify-content-end">
		          <li class="page-item" :class="{ disabled: pagination.currentPage === 1 }">
		            <button class="page-link" @click="loadCategories(pagination.currentPage - 1)" :disabled="pagination.currentPage === 1">
		            	<span aria-hidden="true">&laquo;</span>
		            </button>
		          </li>

		          <li class="page-item" v-for="page in pagination.totalPages" :key="page" :class="{ active: pagination.currentPage === page }">
		            <button class="page-link" @click="loadCategories(page)">{{ page }}</button>
		          </li>

		          <li class="page-item" :class="{ disabled: pagination.currentPage === pagination.totalPages }">
		            <button class="page-link" @click="loadCategories(pagination.currentPage + 1)" :disabled="pagination.currentPage === pagination.totalPages">
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
				categories: [],
				pagination: {
			        currentPage: 1,
			        totalPages: 1
			    }
			}
		},
		mounted() {
			this.loadCategories();
		},
		methods: {

			async loadCategories(page = 1) {

				await this.$axios.$get(`/api/admin/categories?page=${page}`)
				.then(res => {
					this.categories = res.data;
					this.pagination.currentPage = res.meta.current_page;
          			this.pagination.totalPages = res.meta.last_page;
				})
			},

			async deleteCategory(categoryId) {
				
		    	const confirmed = confirm("Are you sure you want to delete this category?");

		      	if (confirmed) {
		        	try {

		          		await this.$axios.$delete(`/api/admin/categories/${categoryId}`);
		          		this.$notify.success({
			            	message: "Category deleted successfully.",
			          	});
		          		
		          		this.loadCategories(this.pagination.currentPage);

			        } catch (error) {
			          	this.$notify.error({
			            	message: "Error deleting category.",
			          	});
			        }
		      	}
		    }
		}
	}
</script>