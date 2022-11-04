<script setup lang="ts">
defineProps<{
	src: string,
	css?: string,
}>();
</script>

<template>
	<div class="w-full flex justify-end">
		<div class="w-[26px] h-[26px] flex justify-center items-center rounded-[3px] bg-[#161616] cursor-pointer" :style="css">
			<img :src="src" />
		</div>
	</div>
</template>