<script setup lang="ts">
import Buttons from './Buttons.vue';
</script>

<template>
	<div class="w-screen h-screen bg-[#202020] pt-8">
		<div class="
			flex justify-center items-center
			h-[846px] w-[1105px]
			rounded-[50px]
			bg-[#111111] shadow-xl
			relative m-auto
			text-[14px]
		">
			<Buttons />
			<slot></slot>
		</div>
	</div>
	
</template>