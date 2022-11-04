<script setup lang="ts">
	import ArrowRight from '@/assets/tablet/ArrowRight.png';

	/* 
		This "breadcrumb" type of bar needs a map like string:function[]
		Each function in array will be executed, therefore setting the state "back" to previous tab
	*/

	defineProps<{
		title: string,
		history: Map<string, (() => void)[]>,
	}>();
</script>

<template>
	<div class="font-bold text-[16px]">
		{{title}}
	</div>
	<div class="flex mb-[25px]">
		<div
			class="flex items-center cursor-pointer"
			v-for="([name, functions], index) in history"
			:key="index"
		>
			<div
				class="mr-2"
				:class="index === history.size - 1 ? '' : 'opacity-60'"
				@click="functions.forEach(fun => fun())"
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