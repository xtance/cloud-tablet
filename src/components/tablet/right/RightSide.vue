<script setup lang="ts">
import { tabs } from '@/stores/tab';
import TabContainer from './TabContainer.vue';
import Wanted from './wanted/Wanted.vue';
const [ citizen, vehicle, wanted, laws ] = tabs;
</script>

<template>
	<div class="bg-[#161616] p-4 flex-grow h-full px-[30px] py-[48px]">
		<TabContainer :thisTab="wanted">
			<Wanted />
		</TabContainer>
	</div>
</template>