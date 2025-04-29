<script setup lang="ts">
const langItems = ref([
	{
		value: "ru",
		label: "RU",
		disabled: false
	},
	{
		value: "en",
		label: "EN",
		disabled: true
	},
	{
		value: "qq",
		label: "QQ",
		disabled: true
	}
])

const { toggleDrawer } = useDrawerStore()

const langValue = ref("ru")
</script>
<template>
	<header class="flex flex-col gap-3">
		<div class="flex gap-3 justify-between items-center">
			<div class="flex gap-5 items-center">
				<UButton
					variant="ghost"
					icon="i-lucide-menu"
					class="xl:hidden text-2xl"
					size="xl"
					@click="() => toggleDrawer('right')"
				/>
				<UInput
					icon="i-lucide-search"
					size="xl"
					placeholder="Искать задачу"
					class="max-xl:hidden"
				/>
			</div>
			<div class="text-center">
				<h3 class="font-bold xl:hidden text-base capitalize">СПИСОК-ДЕЛ</h3>
				<span class="text-base xl:text-lg capitalize">2025, Апр. 26</span>
			</div>
			<div class="flex gap-5 items-center">
				<UPopover
					:content="{
						align: 'end',
						side: 'bottom'
					}"
				>
					<UChip size="3xl" :text="5" :ui="{ base: 'size-4' }">
						<UIcon name="i-lucide-bell-dot" class="text-2xl" />
					</UChip>
					<template #content>
						<div class="w-48 p-3">
							<h4 class="text-sm font-semibold mb-3">Title</h4>
							<ol class="list-decimal pl-4">
								<li>list</li>
								<li>list</li>
								<li>list</li>
							</ol>
						</div>
					</template>
				</UPopover>
				<USelect v-model="langValue" size="xl" :items="langItems" />
				<UAvatar
					icon="i-lucide-user-round"
					size="xl"
					class="xl:hidden cursor-pointer"
					@click="() => toggleDrawer('left')"
				/>
			</div>
		</div>
		<UInput size="lg" placeholder="Search" class="xl:hidden" />
	</header>
</template>
