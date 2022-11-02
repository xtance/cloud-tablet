<script setup lang="ts">
defineProps<{
	text: string,
}>()
</script>

<template>
	<h1 class="font-bold text-[18px]">
		{{text}}
	</h1>
</template>