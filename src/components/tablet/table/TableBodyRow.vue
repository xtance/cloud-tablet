<script setup lang="ts">
defineProps<{
	css?: string,
}>();
</script>

<template>
	<div class="flex items-center bg-[#0e0e0e] mb-[10px] rounded-[6px] cursor-pointer" :style="css">
		<slot></slot>
	</div>
</template>