<script setup lang="ts"></script>
<template>
	<div class="min-h-screen w-screen flex">
		<LayoutSideBarLeft />
		<main class="flex-1 flex flex-col gap-5 p-5">
			<LayoutHeader />
			<section class="flex-1 flex flex-col">
				<NuxtErrorBoundary>
					<template #default>
						<slot />
					</template>
					<template #error>
						<h1>Error</h1>
					</template>
				</NuxtErrorBoundary>
			</section>
			<LayoutFooter />
		</main>
		<LayoutSideBarRight />
	</div>
</template>
