<script setup lang="ts">
defineProps<{
	text: string;
	class?: string;
}>();
</script>

<template>
	<button class="w-full rounded-[6px] p-[14px] mb-[10px]" :class="class">
		{{text}}
	</button>
</template>