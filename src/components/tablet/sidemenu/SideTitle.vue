<script setup lang="ts">
defineProps<{
	title: string,
	subtitle?: string,
}>()
</script>

<template>
	<div class="mb-[16px]">
		<h1 class="font-bold text-[18px] leading-[21px]">
			{{title}}
		</h1>
		<h2 class="font-normal text-[12px] leading-[14px] opacity-60 mt-[5px]" v-if="subtitle">
			{{subtitle}}
		</h2>
	</div>
</template>