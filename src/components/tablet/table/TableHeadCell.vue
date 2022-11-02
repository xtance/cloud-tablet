<script setup lang="ts">
	defineProps<{
		css?: string
	}>();
</script>

<template>
	<div class="w-full text-[12px] leading-[14px] opacity-60" :style="css">
		<slot></slot>
	</div>
</template>