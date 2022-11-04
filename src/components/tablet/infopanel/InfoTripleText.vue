<script setup lang="ts">
defineProps<{
	first: string,
	second: string,
	third: string,
	css?: string,
}>();
</script>

<template>
	<div class="w-full">
		<div class="text-[10px] opacity-60">{{first}}</div>
		<div class="text-[14px] " :style="css">{{second}}</div>
		<div class="text-[12px] opacity-60">{{third}}</div>
	</div>
</template>