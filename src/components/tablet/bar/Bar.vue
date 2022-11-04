<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BarButton from './BarButton.vue';

defineProps<{
	buttons: string[],
	active: number,
}>();

const emit = defineEmits<{
	(e: 'change', index: number): void
}>();

/* Allows horizontal scroll */
const root = ref<HTMLElement | null>(null);
const pixels = 100;

onMounted(() => {
	if (!root.value) return console.log('[Bar] No node provided');
	root.value.addEventListener("wheel", function (e) {
		if (!root.value) return;
		root.value.scrollLeft += e.deltaY > 0 ? pixels : -pixels;
		e.preventDefault();
	});
});
</script>

<template>
	<div class="overflow-x-hidden mr-[-30px]">
		<div class="flex justify-start pb-[20px] pt-[20px] overflow-x-scroll" ref="root">
			<div v-for="(text, index) in buttons" :key="index">
				<BarButton v-on:click="emit('change', index)" :text="text" :isActive="index === active" />
			</div>
		</div>
	</div>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none !important;
}
</style>

