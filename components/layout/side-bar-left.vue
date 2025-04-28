<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const { isMobile } = useResponsive()

const items = ref<NavigationMenuItem>([
	{
		label: "Все задачи",
		icon: "i-lucide-layout-grid",
		to: "/"
	},
	{
		label: "Сегодняшние задачи",
		icon: "i-lucide-calendar-clock",
		to: "/today"
	},
	{
		label: "Важные задачи",
		icon: "i-lucide-bell-ring",
		to: "/important"
	},
	{
		label: "Завершенные задачи",
		icon: "i-lucide-square-check-big",
		to: "/completed"
	},
	{
		label: "Незавершенные задачи",
		icon: "i-lucide-square-x",
		to: "/uncompleted"
	}
])
</script>
<template>
	<aside class="w-64 border-r-1 border-default">
		<div class="flex flex-col px-3 py-6 text-center gap-8">
			<h3 class="text-2xl font-bold">СПИСОК-ДЕЛ</h3>
			<UButton class="w-full justify-center">Добавить новую задачу</UButton>
		</div>
		<UNavigationMenu
			orientation="vertical"
			:items="items"
			:ui="{
				link: 'min-h-12 px-4'
			}"
			class="data-[orientation=vertical]:w-full gap-2 px-3"
		/>
	</aside>
</template>
