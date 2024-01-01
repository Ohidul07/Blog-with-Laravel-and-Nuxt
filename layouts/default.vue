<template>
	<div>
		<frontend-navbar />
		<div class="container">
			<main class="all-content">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-9">
							<div class="main-content">
								<Nuxt />
							</div>
						</div>	
						<div class="col-md-3">
							<div class="sidebar">
								<frontend-sidebar />
							</div>
						</div>	
					</div>
				</div>
			</main>
		</div>
		<frontend-footer />
	</div>
</template>