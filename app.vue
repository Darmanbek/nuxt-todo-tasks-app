<script setup lang="ts">
useHead({
	title: "Nuxt Todo Task App"
})
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<UApp>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UApp>
	</div>
</template>
