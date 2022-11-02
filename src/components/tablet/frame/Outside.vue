<script setup lang="ts">
import Buttons from './Buttons.vue';
</script>

<template>
	<div class="
		flex justify-center items-center
		h-[846px] w-[1105px]
		rounded-[50px]
		bg-[#111111] shadow-xl
		relative
	">
		<Buttons />
		<slot></slot>
	</div>
</template>