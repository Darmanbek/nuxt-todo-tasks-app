<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<div class="flex min-h-screen gap-5 justify-center flex-col items-center">
		<h1 class="text-5xl">{{ error?.statusCode }}</h1>
		<UButton to="/" variant="link">Go back home</UButton>
	</div>
</template>
