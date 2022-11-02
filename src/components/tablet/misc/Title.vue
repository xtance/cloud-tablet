<script setup lang="ts">
defineProps<{
	text: string,
	subtitle?: string,
}>()
</script>

<template>
	<div class="mb-[16px]">
		<h1 class="font-bold text-[16px] leading-[21px]">
			{{text}}
		</h1>
		<h2 class="font-normal text-[12px] leading-[14px] opacity-60 mt-[5px]" v-if="subtitle">
			{{subtitle}}
		</h2>
	</div>
</template>