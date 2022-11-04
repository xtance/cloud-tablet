<script setup lang="ts">
defineProps<{
	desc: string,
	text: string,
	class?: string,
	css?: string,
}>();
</script>

<template>
	<div :class="class">
		<div class="text-[10px] opacity-60">{{desc}}</div>
		<div class="text-[16px] mb-[4px]" :style="css">{{text}}</div>
	</div>
</template>