<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';

import { onMounted, ref } from 'vue';
import { Person } from './Person';

import Profile from './PersonProfile.vue';
import VehicleList from './VehicleList.vue';
import HistoryBar from '../../historybar/HistoryBar.vue';
import { computed } from '@vue/reactivity';
import { Vehicle } from './Vehicle';
import PersonList from './PersonList.vue';
import { File } from './File';
import FileHistory from './FileHistory.vue';
import ActiveFile from './ActiveFile.vue';
import { License, LicenseStatus } from './License';
import EditLicenses from './EditLicenses.vue';


function onSubmit(text: string){
	console.log(`[CitizenSearch] Searching for ${text}`);
	if (!text) return; /* TODO: if there is a notification system already, display an error. */
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
const files = ref<File[]|null>(null);
const activeFile = ref<File|null>(null);
const licenses = ref<License[]|null>(null);
const menuLicenses = ref<License[]|null>(null);

/* Debugging */
onMounted(() => fetchPerson(new Person('Matce', 'Fuksusauskas', false, '01.01.1999', false)));

const backToVehicleList = () => currentVehicle.value = null;
const backToPersonProfile = () => vehicles.value = null;
const backToPersonSearch = () => currentPerson.value = null;

/* This map is explained in HistoryBar.vue, basically arrays of functions to reset the state */
const history = computed(() => {
	const map = new Map<string, (() => void)[]>();
	map.set('Personensuche', [ backToVehicleList, backToPersonProfile, backToPersonSearch ]);
	if (currentPerson.value) map.set(currentPerson.value.firstName + ' ' +currentPerson.value.lastName, [ backToVehicleList, backToPersonProfile ]);
	if (vehicles.value) map.set(`Fahrzeuge`, [ backToVehicleList ]);
	if (currentVehicle.value) map.set(currentVehicle.value.name, []);
	return map;
});

function fetchPerson(person: Person){
	currentPerson.value = person;
	fetchActiveFile();
	fetchFiles();
	fetchLicenses();
}

function fetchVehicles(){
	vehicles.value = [
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
		new Vehicle('Porsche Taycan', 412561, '41215854', false),
		new Vehicle('Porsche Taycan', 412561, '41215854', false),
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
		new Vehicle('Porsche Taycan', 412561, '41215854', true),
	]
}

function openLicenseMenu(){
	if (!licenses.value) return; /* TODO: display an error, license menu can't be opened if there are no licenses */
	menuLicenses.value = licenses.value.map(license => license.getCopy());
	console.log(menuLicenses.value)
}

function fetchActiveFile(){
	activeFile.value = new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', false, 'Falsely Accused');
}

function fetchFiles(){
	files.value = [
		new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', false, 'Falsely Accused'),
		new File(7001, 1667570290554, 'Diego Macher', 'Lieutenant', true, 'Running'),
		new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', true, 'Falsely Accused'),
		new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', false, 'Falsely Accused'),
		new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', false, 'Falsely Accused'),
		new File(7221, 1667570290554, 'Diego Macher', 'Lieutenant', false, 'Falsely Accused'),
	]
}



function fetchLicenses(){
	licenses.value = [
		new License('car', LicenseStatus.ACTIVE),
		new License('truck', LicenseStatus.ACTIVE),
		new License('scooter', LicenseStatus.NONE),
		new License('ship', LicenseStatus.NONE),
		new License('plane', LicenseStatus.ACTIVE),
		new License('weapon', LicenseStatus.NONE),
	]
}

const buttons = new Map<string, () => void>()
	.set('Status Andern', () => {})
	.set('Fahrzeuge', fetchVehicles)
	.set('Akte vergeben', () => {})
	.set('Lizenz entnehmen', openLicenseMenu);

</script>

<!-- 
	This component handles everything the "Person Search" tab has,
	including search, showing a person profile, his vehicles, etc.
	It is independent from the "Vehicle Search" tab,
	thus enabling multitasking simulation in the tablet.
 -->
<template>

	<div v-if="vehicles">
		<HistoryBar
			title="Personensuche"
			:history="history"
		/>
		<VehicleList
			v-if="vehicles.length"
			:vehicles="vehicles"
			@setVehicle="(vehicle) => currentVehicle = vehicle"
		/>
		<NotFound
			v-else
			title="Keine Vehicle gefunden"
			subtitle="Wir konnten leider keine Fahrzeuge von der Person finden."
		/>
	</div>

	<div v-else-if="currentPerson">
		<HistoryBar
			title="Personenakte"
			:history="history"
		/>
		<Profile
			:person="currentPerson"
			:buttons="buttons"
			:licenses="licenses"
		/>
		<ActiveFile
			v-if="activeFile"
			:file="activeFile"
		/>
		<FileHistory
			v-if="files"
			:files="files"
		/>
		<EditLicenses
			v-if="menuLicenses"
			:licenses="menuLicenses"
			@onClose="menuLicenses = null"
		/>
	</div>

	<div v-else>

		<Title  text="Personensuche" subtitle="Suche eine bestimmte Person." />
		<Search @submit="onSubmit" placeholder="Bitte gebe ein Namen ein" />

		<PersonList
			v-if="persons.length"
			:persons="persons"
			@setPerson="(person) => currentPerson = person"
		/>
		<NotFound
			v-else
			title="Keine Person gefunden"
			subtitle="Wir konnten leider mit Ihrer Suche keine Person finden."
		/>
	</div>
	
</template>