<template>
	<div>
		<nav class="navbar navbar-expand-lg bg-light border-bottom border-1">
			<div class="container-fluid">
				<nuxt-link class="navbar-brand" to="/admin/dashboard">
					<img class="rounded-circle" src="~/assets/images/admin-logo.jpg" width="35px" height="35px" alt="Learn" />
					<span>Blog</span>
				</nuxt-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
							<a class="nav-link" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								<img class="rounded-circle" src="~/assets/images/ppl.jpg" width="30px" height="30px" alt="Learn" />
								Ohidul
							</a>
							<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
								<li>
									<nuxt-link class="dropdown-item" to="#"><span class="pe-2"><i class="fa-solid fa-user"></i></span>Profile</nuxt-link>
								</li>
								<li>
									<nuxt-link class="dropdown-item" to="#"><span class="pe-2"><i class="fa-solid fa-lock"></i></span>Change Password</nuxt-link>
								</li>
								<li>
									<button class="dropdown-item"  @click="handleLogout"><span class="pe-2"><i class="fa-solid fa-power-off"></i></span>Logout</button>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		methods: {
			handleLogout() {
				this.$auth.logout();
			}
		}
	}
</script>

<style scoped>
</style>