<script setup lang="ts">
defineProps<{
	text: string,
}>()
</script>

<template>
	<h1 class="font-normal text-[18px] opacity-60">
		{{text}}
	</h1>
</template>