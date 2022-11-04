<script setup lang="ts">
import Close from '@/assets/tablet/Close.png';
const emit = defineEmits<{
	(e: 'onClose'): void,
}>();

function onClose(e: Event){
	if (e.currentTarget !== e.target) return;
	emit('onClose');
}

</script>

<template>
	<div class="
		flex justify-end
		rounded-[14px]
		w-[1035px] h-[776px]
		overflow-hidden
		absolute top-0 left-0
		backdrop-blur-[2px] bg-black/20
	" @click="onClose">

		<div class="
			w-auto h-full flex flex-col
			bg-[#0B0A0A] shadow-md
		">
			<div class="flex justify-end cursor-pointer p-[10px] pb-0" @click="emit('onClose')">
				<img :src="Close" />
			</div>
			<div class="p-[30px] flex-grow">
				<slot></slot>
			</div>
		</div>
	</div>
</template>