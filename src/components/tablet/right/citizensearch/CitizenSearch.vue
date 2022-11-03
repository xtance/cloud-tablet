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
import type { Vehicle } from './Vehicle';


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

</script>

<template>

	<div v-if="currentPerson">

		<HistoryBar
			title="Personenakte"
			:history="history"
		/>

		<Profile
			v-if="currentPerson"
			:person="currentPerson"
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
				<TableBodyRow v-for="person in persons" :css="person.wantedStatus ? 'background-color: #C84040' : ''">
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

		<NotFound v-else />
	</div>
	
	
</template>