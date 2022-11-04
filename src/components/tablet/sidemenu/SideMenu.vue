<script setup lang="ts">
import Close from '@/assets/tablet/Close.png';
const emit = defineEmits<{
	(e: 'onClose'): void,
}>();
</script>

<template>
	<div class="
		flex justify-end
		rounded-[14px]
		w-[1035px] h-[776px]
		overflow-hidden
		absolute top-0 left-0
	">

		<!-- Blur + click to close -->
		<div @click="emit('onClose')" class="w-[721px] h-full backdrop-blur-[2px] bg-black/20"></div>

		<div class="
			w-[314px] h-full 
			bg-[#0B0A0A] shadow-md
		">
			<div class="flex justify-end cursor-pointer p-[10px] pb-0" @click="emit('onClose')">
				<img :src="Close" />
			</div>
			<div class="p-[30px]">
				<slot></slot>
			</div>
		</div>
	</div>
</template>