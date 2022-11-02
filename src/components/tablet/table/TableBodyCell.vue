<script setup lang="ts">
	defineProps<{
		css?: string
	}>();
</script>

<template>
	<div class="w-full p-[15px] rounded-[6px] whitespace-nowrap" :style="css">
		<slot></slot>
	</div>
</template>