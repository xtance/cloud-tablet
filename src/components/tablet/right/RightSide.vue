<script setup lang="ts">
import { tabs } from '@/stores/tab';
import TabContainer from './TabContainer.vue';
import Wanted from './wanted/Wanted.vue';
import Employees from './employees/Employees.vue';
import Background from '@/assets/tablet/Background.png';

const [ citizen, vehicle, wanted, laws, employees ] = tabs;
const style = `background-image: url(${Background});`;
</script>

<template>
	<div
		class="p-4 flex-grow h-full px-[30px] py-[48px] bg-no-repeat bg-right-bottom bg-cover"
		:style="style"
	>
		<TabContainer :thisTab="wanted">
			<Wanted />
		</TabContainer>
		<TabContainer :thisTab="employees">
			<Employees />
		</TabContainer>
	</div>
</template>