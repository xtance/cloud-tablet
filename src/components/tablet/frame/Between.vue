<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
	<div class="
		w-[1095px] h-[836px]
		flex justify-center items-center
		bg-[#111111] shadow-xl rounded-[45px]
	">
		<slot></slot>
	</div>
</template>