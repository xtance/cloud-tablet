<script setup lang="ts">
	import ArrowRight from '@/assets/tablet/ArrowRight.png';
	defineProps<{
		title: string,
		history: Map<string, () => void>,
	}>();
</script>

<template>
	<div class="font-bold text-[16px]">
		{{title}}
	</div>
	<div class="flex mb-[25px]">
		<div
			class="flex items-center cursor-pointer"
			v-for="([name, fun], index) in history"
			:key="index"
		>
			<div
				class="mr-2"
				:class="index === history.size - 1 ? '' : 'opacity-60'"
				@click="fun"
			>
				{{name}}
			</div>
			<img
				v-if="index !== history.size - 1"
				:src="ArrowRight"
				class="mr-2"
			/>
		</div>
	</div>
</template>