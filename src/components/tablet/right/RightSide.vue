<script setup lang="ts">
import { tabs } from '@/stores/tab';
import TabContainer from './TabContainer.vue';
import Wanted from './wanted/Wanted.vue';
import Employees from './employees/Employees.vue';
import Laws from './laws/Laws.vue';
import Background from '@/assets/tablet/Background.png';
import PersonSearch from './personsearch/PersonSearch.vue';
import VehicleSearch from './vehiclesearch/VehicleSearch.vue';


const [ person, vehicle, wanted, laws, employees ] = tabs;
const style = `background-image: url(${Background});`;
</script>

<template>
	<div
		class="p-4 w-[792px] h-full px-[30px] pt-[48px] bg-no-repeat bg-right-bottom bg-cover overflow-y-scroll"
		:style="style"
	>
		<TabContainer :thisTab="person">
			<PersonSearch />
		</TabContainer>
		<TabContainer :thisTab="vehicle">
			<VehicleSearch />
		</TabContainer>
		<TabContainer :thisTab="wanted">
			<Wanted />
		</TabContainer>
		<TabContainer :thisTab="employees">
			<Employees />
		</TabContainer>
		<TabContainer :thisTab="laws">
			<Laws />
		</TabContainer>
	</div>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>