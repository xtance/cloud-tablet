<script setup lang="ts">
defineProps<{
	desc: string,
	text: string,
	css?: string,
}>();
</script>

<template>
	<div>
		<div class="text-[10px] opacity-60">{{desc}}</div>
		<div class="text-[16px] mb-[4px]" :style="css">{{text}}</div>
	</div>
</template>