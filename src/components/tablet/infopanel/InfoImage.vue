<script setup lang="ts">
defineProps<{
	src: string
}>();
</script>

<template>
	<img
		:src="src"
		alt="Profile pic"
		class="bg-[#161616] w-[136px] h-[166px] rounded-[5px]"
	/>
</template>
