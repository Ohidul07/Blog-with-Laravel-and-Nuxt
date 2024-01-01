<template>
	<div class="sidebar-item-lists">
		<ul>
			<li>
				<nuxt-link to="/admin/dashboard">
					<span :class="{ 'active': isActive('/admin/dashboard') }">
						<i class="fa-solid fa-gauge" :class="{ 'icon-active': isActive('/admin/dashboard') }"></i>Dashboard
					</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/admin/categories">
					<span :class="{ 'active': isActive('/admin/categories') }">
						<i class="fa-solid fa-layer-group" :class="{ 'icon-active': isActive('/admin/categories') }"></i>Categories
					</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/admin/tags">
					<span :class="{ 'active': isActive('/admin/tags') }">
						<i class="fa-solid fa-tags" :class="{ 'icon-active': isActive('/admin/tags') }"></i>Tags
					</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/admin/posts">
					<span :class="{ 'active': isActive('/admin/posts') }">
						<i class="fa-solid fa-signs-post" :class="{ 'icon-active': isActive('/admin/posts') }"></i>Posts
					</span>
				</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/admin/users">
					<span :class="{ 'active': isActive('/admin/users') }">
						<i class="fa-solid fa-users" :class="{ 'icon-active': isActive('/admin/users') }"></i>
						Admin Users
					</span>
				</nuxt-link>
			</li>
		</ul>	
	</div>
</template>

<script>
	export default {
		methods: {
		    isActive(val) {
		      return this.$route.path === val || this.$route.path.startsWith(val);
		    },
		}
	}	
</script>

<style scoped>
	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.sidebar-item-lists ul li a span {
	    padding: 10px;
	    border-left: 3px solid #fff;
	    border-bottom: 1px solid #f1f1f1;
	    display: block;
	    cursor: pointer;
	    color: #000;
	    background-color: #f8f9fa;
	}

	.sidebar-item-lists ul li a span:hover {
	    border-left: 3px solid #5c9dff;
	    background: #fff;
	    color: #92278f;
	}
	.sidebar-item-lists ul li a span i {
	    font-size: 16px;
	    color: #92278f;
	    margin-right: 7px;
	}

	.active {
		background: #92278f !important;
		color: #fff !important;
	}
	.icon-active {
		color: #fff !important;
	}	
</style>