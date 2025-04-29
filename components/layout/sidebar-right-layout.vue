<script lang="ts" setup>
const drawerStore = useDrawerStore()
const { right } = storeToRefs(drawerStore)
const { isMobile } = useResponsive()
</script>

<template>
	<aside
		v-if="!isMobile"
		class="hidden xl:block sticky top-0 bottom-0 right-0 h-screen overflow-y-auto overflow-x-hidden w-64 border-l border-default"
	>
		<LayoutSidebarRight />
	</aside>
	<template v-else>
		<UDrawer v-model:open="right" direction="right">
			<template #content>
				<LayoutSidebarRight />
			</template>
		</UDrawer>
	</template>
</template>

<style scoped></style>
