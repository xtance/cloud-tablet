<script setup lang="ts">
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';
import Button from '../../misc/Button.vue';
import { ref } from 'vue';

const emit = defineEmits<{
	(e: 'onChangeStatus', status: boolean, title: string, reason: string): void,
	(e: 'onClose'): void,
}>();

const status = ref(true);
const title = ref('');
const reason = ref('');

</script>

<template>
	<SideMenu @onClose="emit('onClose')">
		<div class="w-[254px]">
			<SideTitle title="Change status" subtitle="Fill in the information to change a person's status" />
			
			<div class="text-[10px] opacity-60 mt-[30px] mb-[4px]">Select status</div>
			<div class="flex mb-[10px]">
				<button @click="status = false" class="w-1/2 rounded-l-[6px] p-2" :class="status ? 'bg-[#0F0F0F]' : 'bg-[#4052C8]'">
					Not Wanted
				</button>
				<button @click="status = true" class="w-1/2 rounded-r-[6px] p-2" :class="status ? 'bg-[#C84040]' : 'bg-[#0F0F0F]'">
					Wanted
				</button>
			</div>

			<div class="text-[10px] opacity-60 mt-[30px] mb-[4px]">Title</div>
			<input class="w-full p-4 bg-[#0F0F0F] rounded-[6px]" v-model="title" placeholder="Enter title" />

			<div class="text-[10px] opacity-60 mt-[30px] mb-[4px]">Reason</div>
			<textarea class="w-full h-[111px] resize-none p-4 bg-[#0F0F0F] rounded-[6px]" v-model="reason" placeholder="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum" />

			<Button text="Change Status" class="bg-[#4052C8] mt-[30px]" @click="emit('onChangeStatus', status, title, reason)" />
		</div>
	</SideMenu>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>