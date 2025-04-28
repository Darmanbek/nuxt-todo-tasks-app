<script lang="ts" setup></script>

<template>
	<UCard>
		<template #header>
			<div class="flex items-center gap-3 justify-between">
				<h1 class="font-semibold text-base">Card Title</h1>
				<UBadge size="lg">Main</UBadge>
			</div>
		</template>
		<template #default>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti eius facilis itaque
				molestiae possimus rem veniam? Dolore, doloribus, quos.
			</p>
			<div class="mt-5">
				<UBadge size="lg" icon="i-lucide-calendar-days" color="warning">2025-01-01</UBadge>
			</div>
		</template>
		<template #footer>
			<div class="flex justify-around">
				<span>
					<USwitch checked-icon="i-lucide-check" unchecked-icon="i-lucide-x" />
				</span>
				<span>
					<UIcon name="i-lucide-star" class="text-xl" />
				</span>
				<span>
					<UIcon name="i-lucide-trash-2" class="text-xl" />
				</span>
				<span>
					<UIcon name="i-lucide-edit" class="text-xl" />
				</span>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
