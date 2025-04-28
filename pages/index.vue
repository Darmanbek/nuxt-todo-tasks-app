<script lang="ts" setup></script>

<template>
	<div>
		<div class="py-4">
			<h2 class="text-xl font-medium">Все задачи (4 задача)</h2>
		</div>
		<div class="flex flex-wrap -mx-2 -my-2">
			<div
				v-for="(_, index) in Array.from({ length: 4 })"
				:key="index"
				class="w-full md:w-1/2 2xl:w-1/3 px-2 py-2"
			>
				<SharedTaskCard />
			</div>
		</div>
	</div>
</template>
