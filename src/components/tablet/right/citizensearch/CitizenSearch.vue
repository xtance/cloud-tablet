<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import { onMounted, ref } from 'vue';
import { Person } from './Person';

import Profile from './Profile.vue';
import HistoryBar from '../../historybar/HistoryBar.vue';
import { computed } from '@vue/reactivity';
import { Vehicle } from './Vehicle';


function onSubmit(text: string){
	console.log(`[CitizenSearch] Searching for ${text}`);
	persons.value = [
		new Person('Matce', 'Fuksus', false, '01.01.1999', true),
		new Person('Matce', 'Fuksusauskas', false, '01.01.1999', false),
		new Person('Matce', 'Fuksusauskas', false, '01.01.1999', false),
	];
}

const persons = ref([] as Person[]);
const currentPerson = ref<Person|null>(null);
const vehicles = ref<Vehicle[] | null>(null);
const currentVehicle = ref<Vehicle|null>(null);

onMounted(() => {
	currentPerson.value = (new Person('Matce', 'Fuksusauskas', false, '01.01.1999', false));
});

const history = computed(() => {
	const map = new Map<string, () => void>();
	map.set('Personensuche', () => currentPerson.value = null);
	if (currentPerson.value) map.set(`${currentPerson.value.firstName} ${currentPerson.value.lastName}`, () => vehicles.value = null);
	if (vehicles.value) map.set(`Fahrzeuge`, () => currentVehicle.value = null);
	if (currentVehicle.value) map.set(`${currentVehicle.value.name}`, () => {});
	return map;
});

function getPersonVehicles(){
	return [
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
		new Vehicle('Porsche Taycan', 412561, '41215854', false),
		new Vehicle('Porsche Taycan', 412561, '41215854', false),
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
	]
}

const buttons = new Map<string, () => void>();
buttons.set('Status Andern', () => {});
buttons.set('Fahrzeuge', () => vehicles.value = getPersonVehicles());
buttons.set('Akte vergeben', () => {});
buttons.set('Lizenz entnehmen', () => {});

</script>

<template>

	<div v-if="vehicles">
		<TableContainer v-if="vehicles.length">
			<TableHead>
				<TableHeadRow v-for="head in ['Fahrzeug', 'Fahrzeug-ID', 'Kennzeichen', 'Status']">
					<TableHeadCell>
						{{head}}
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody>
				<TableBodyRow v-for="vehicle in vehicles" @click="currentVehicle = vehicle" :css="vehicle.status ? 'background-color: #C84040' : ''">
					<TableBodyCell>
						{{vehicle.name}}
					</TableBodyCell>
					<TableBodyCell>
						#{{vehicle.id}}
					</TableBodyCell>
					<TableBodyCell>
						{{vehicle.numberPlate}}
					</TableBodyCell>
					<TableBodyCell>
						{{vehicle.status ? 'Gesucht' : 'Nicht gesucht'}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>

		<NotFound
			v-else
			title="Keine Vehicle gefunden"
			subtitle="Wir konnten leider mit Ihrer Suche keine Vehicle finden."
		/>
	</div>

	<div v-else-if="currentPerson">

		<HistoryBar
			title="Personenakte"
			:history="history"
		/>

		<Profile
			v-if="currentPerson"
			:person="currentPerson"
			:buttons="buttons"
		/>

	</div>

	<div v-else>

		<Title  text="Personensuche" subtitle="Suche eine bestimmte Person." />
		<Search @submit="onSubmit" placeholder="Bitte gebe ein Namen ein" />

		<TableContainer v-if="persons.length">
			<TableHead>
				<TableHeadRow v-for="head in ['Vorname', 'Nachname', 'Geschlecht', 'Geburtstag', 'Status']">
					<TableHeadCell>
						{{head}}
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody>
				<TableBodyRow v-for="person in persons" @click="currentPerson = person" :css="person.wantedStatus ? 'background-color: #C84040' : ''">
					<TableBodyCell>
						{{person.firstName}}
					</TableBodyCell>
					<TableBodyCell>
						{{person.lastName}}
					</TableBodyCell>
					<TableBodyCell>
						{{person.gender ? 'Female' : 'Male'}}
					</TableBodyCell>
					<TableBodyCell>
						{{person.bornDate}}
					</TableBodyCell>
					<TableBodyCell>
						{{person.wantedStatus ? 'Wanted' : 'Not Wanted'}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>

		<NotFound
			v-else
			title="Keine Person gefunden"
			subtitle="Wir konnten leider mit Ihrer Suche keine Person finden."
		/>
	</div>
	
	
</template>