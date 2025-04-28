<script lang="ts" setup>
const { params } = useRoute()
</script>

<template>
	<div>
		<h1>{{ params.filter }}</h1>
	</div>
</template>

<style scoped></style>
