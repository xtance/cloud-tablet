<script setup lang="ts">
	defineProps<{
		buttons: Map<string, () => void>,
	}>();
</script>

<template>
	<div
		class="w-min"
	>
		<button
			v-for="([name, fun], index) in buttons"
			:key="index"
			class="w-[175px] bg-[#161616] mb-[12px] py-[14px] rounded-[6px]"
			@click="fun"
		>
			{{name}}
		</button>
	</div>
</template>