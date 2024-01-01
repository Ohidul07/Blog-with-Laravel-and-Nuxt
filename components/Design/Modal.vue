<template>
	<div>
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  ref="myModal">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">{{ header_title }}</h5>
		        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
		        ...
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary">Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>	
	</div>
</template>

<script>
	export default {
		props: {
			header_title: {
				type: String,
				required: true
			}
		},
	  	methods: {
		    openModal() {
		      new bootstrap.Modal(this.$refs.myModal).show();
		    },
		    closeModal() {
		      new bootstrap.Modal(this.$refs.myModal).hide();
		    },
	  	},
	};
</script>