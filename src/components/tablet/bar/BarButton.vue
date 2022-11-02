<script setup lang="ts">
	defineProps<{
		text: string,
		isActive: boolean,
	}>();
</script>

<template>
	<div class="px-[19px] py-[10px] rounded-full mr-[10px] cursor-pointer" :class="isActive ? 'bg-[#4052C8]' : 'bg-[#111111]'">
		{{text}}
	</div>
</template>