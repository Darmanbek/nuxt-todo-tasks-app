<script setup lang="ts">
const colorMode = useColorMode()
const percentValue = ref(25)

const isDark = computed({
	get() {
		return colorMode.value === "dark"
	},
	set(_isDark) {
		colorMode.preference = _isDark ? "dark" : "light"
	}
})
</script>
<template>
	<div class="flex p-6 flex-col gap-6 h-full overflow-y-auto">
		<div class="flex flex-col gap-6">
			<div class="flex gap-3 items-center justify-between">
				<h3 class="font-bold text-center text-base">Привет, Пользователь</h3>
				<UAvatar icon="i-lucide-user-round" size="xl" />
			</div>
			<div class="flex gap-3 items-center justify-between mt-6">
				<h3 class="font-semibold text-center text-sm">Тёмная тема</h3>
				<USwitch v-model="isDark" checked-icon="i-lucide-moon" unchecked-icon="i-lucide-sun" />
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<div class="flex gap-3 justify-between items-center">
				<span>Все задачи</span>
				<span>1/4</span>
			</div>
			<UProgress v-model="percentValue" />
		</div>
		<UButton
			href="https://github.com/Darmanbek"
			target="_blank"
			variant="soft"
			class="justify-center mt-auto"
			>Сделано с <img src="/logo.svg" alt="Nuxt" :width="18" :height="18" />
			автором
		</UButton>
	</div>
</template>
