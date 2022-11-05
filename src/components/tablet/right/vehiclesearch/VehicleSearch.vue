<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';

import { computed, onMounted, ref } from 'vue';
import { Vehicle } from '../../models/Vehicle';
import VehicleList from '../personsearch/VehicleList.vue';
import VehicleProfile from './VehicleProfile.vue';
import HistoryBar from '../../historybar/HistoryBar.vue';
import VehicleFileHistory from './VehicleFileHistory.vue';

const vehicles = ref<Vehicle[]|null>(null);
const currentVehicle = ref<Vehicle|null>(null);


function fetchVehicle(vehicle: Vehicle){
	vehicle.fetchFiles();
	currentVehicle.value = vehicle;
}


function onSubmit(text: string){
	console.log(`[VehicleSearch] Searching for ${text}`);
	if (!text) return; /* TODO: if there is a notification system already, display an error. */
	vehicles.value = Vehicle.TEST_VEHICLES.filter(vehicle => vehicle.name.includes(text));
}

const backToVehicleList = () => currentVehicle.value = null;

/* This map is explained in HistoryBar.vue, basically arrays of functions to reset the state */
const history = computed(() => {
	const map = new Map<string, (() => void)[]>();
	map.set('Fahrzeuge', [ backToVehicleList ]);
	if (currentVehicle.value) map.set(currentVehicle.value.name, []);
	return map;
});


</script>

<template>


	<div v-if="currentVehicle">
		<HistoryBar
			title="Fahrzeugsuche"
			:history="history"
		/>
		<VehicleProfile
			:vehicle="currentVehicle"
			:canSwitchToProfile="true"
		/>
		<VehicleFileHistory
			v-if="currentVehicle.files"
			:files="currentVehicle.files"
		/>
	</div>

	<div v-else>

		<Title  text="Fahrzeugsuche" subtitle="Suche eine bestimmte Vehicle." />
		<Search @submit="onSubmit" placeholder="Bitte gebe ein Namen ein" />

		<VehicleList
			v-if="vehicles && vehicles.length"
			:vehicles="vehicles"
			@setVehicle="(vehicle) => fetchVehicle(vehicle)"
		/>
		<NotFound
			v-else-if="vehicles && !vehicles.length"
			title="Keine Vehicle gefunden"
			subtitle="Wir konnten leider mit Ihrer Suche keine Person finden."
		/>
	</div>
</template>