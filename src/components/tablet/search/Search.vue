<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	placeholder?: string,
}>();
const emit = defineEmits<{
	(e: 'submit', text: string): void
}>();
const inputText = ref('');
</script>

<template>
	<form
		@submit.prevent="emit('submit', inputText)"
		class="flex items-center justify-between mb-[20px]"
	>
		<input
			name="text"
			type="text"
			:placeholder="placeholder || 'Search'"
			v-model="inputText"
			class="w-[609px] px-[12px] bg-[#0F0F0F] leading-[50px] rounded-[6px]"
		/>
		<button
			type="submit"
			class="bg-[#4052C8] rounded-[6px] w-[113px] h-[50px]"
		>
			Suchen
		</button>
	</form>
</template>