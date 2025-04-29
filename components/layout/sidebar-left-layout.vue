<script lang="ts" setup>
const drawerStore = useDrawerStore()
const { left } = storeToRefs(drawerStore)
const { isMobile } = useResponsive()
</script>

<template>
	<aside
		v-if="!isMobile"
		class="hidden xl:block sticky top-0 bottom-0 left-0 h-screen overflow-y-auto overflow-x-hidden w-64 border-r-1 border-default"
	>
		<LayoutSidebarLeft />
	</aside>
	<template v-else>
		<UDrawer v-model:open="left" direction="left">
			<template #content>
				<LayoutSidebarLeft />
			</template>
		</UDrawer>
	</template>
</template>

<style scoped></style>
