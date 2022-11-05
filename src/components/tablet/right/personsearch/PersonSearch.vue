<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';

import { onMounted, ref } from 'vue';
import { Person } from '../../models/Person';

import PersonProfile from './PersonProfile.vue';
import VehicleList from './VehicleList.vue';
import HistoryBar from '../../historybar/HistoryBar.vue';
import { computed } from '@vue/reactivity';
import { Vehicle } from '../../models/Vehicle';
import PersonList from './PersonList.vue';
import { File } from '../../models/File';
import FileHistory from './FileHistory.vue';
import ActiveFile from './ActiveFile.vue';
import { License, LicenseStatus } from '../../models/License';
import EditLicenses from './EditLicenses.vue';
import FileCharges from './FileCharges.vue';
import ChangeStatus from './ChangeStatus.vue';
import { tabs, useTabStore } from '@/stores/tab';
import type { Law } from '../../models/Law';
import VehicleFileHistory from '../vehiclesearch/VehicleFileHistory.vue';
import VehicleProfile from '../vehiclesearch/VehicleProfile.vue';

function onSubmit(text: string){
	console.log(`[CitizenSearch] Searching for ${text}`);
	if (!text) return; /* TODO: if there is a notification system already, display an error. */
	persons.value = Person.TEST_PERSONS.filter(person => (person.firstName + ' ' + person.lastName).includes(text));
}

const persons = ref<Person[]|null>(null);
const currentPerson = ref<Person|null>(null);
const vehicles = ref<Vehicle[] | null>(null);
const currentVehicle = ref<Vehicle|null>(null);
const files = ref<File[]|null>(null);
const activeFile = ref<File|null>(null);
const licenses = ref<License[]|null>(null);
const menuLicenses = ref<License[]|null>(null);
const fileChargesEnabled = ref<boolean>(false);
const changeStatusEnabled = ref<boolean>(false);

const tabStore = useTabStore();
const backToVehicleList = () => currentVehicle.value = null;
const backToPersonProfile = () => vehicles.value = null;
const backToPersonSearch = () => currentPerson.value = null;

/* Every tab can change the currentArg, thus opening the profile page  */
tabStore.$subscribe((mutation, state) => {
	if (!state.currentArg) return;
	backToVehicleList();
	backToPersonProfile();
	backToPersonSearch();
	fetchPerson(state.currentArg);
	tabStore.currentArg = null;
});

/* This map is explained in HistoryBar.vue, basically arrays of functions to reset the state */
const history = computed(() => {
	const map = new Map<string, (() => void)[]>();
	map.set('Personensuche', [ backToVehicleList, backToPersonProfile, backToPersonSearch ]);
	if (currentPerson.value) map.set(currentPerson.value.firstName + ' ' +currentPerson.value.lastName, [ backToVehicleList, backToPersonProfile ]);
	if (vehicles.value) map.set(`Fahrzeuge`, [ backToVehicleList ]);
	if (currentVehicle.value) map.set(currentVehicle.value.name, []);
	return map;
});

function fetchPerson(id: number){
	currentPerson.value = Person.TEST_PERSONS.find(person => person.id === id) || null;
	fetchActiveFile();
	fetchFiles();
	fetchLicenses();
}

function fetchVehicles(){
	vehicles.value = [
		new Vehicle(412561, 1, 'Porsche Taycan', '41215854', true),
		new Vehicle(412561, 2, 'Porsche Taycan', '41215854', false),
		new Vehicle(412561, 3, 'Porsche Taycan', '41215854', false),
		new Vehicle(412561, 4, 'Porsche Taycan', '41215854', true),
		new Vehicle(412561, 5, 'Porsche Taycan', '41215854', true),
	]
}


function openLicenseMenu(){
	if (!licenses.value) return; /* TODO: display an error, license menu can't be opened if there are no licenses */
	menuLicenses.value = licenses.value.map(license => license.getCopy());
	console.log(menuLicenses.value)
}

function fetchActiveFile(){
	activeFile.value = File.TEST_FILES[0];
}

function fetchFiles(){
	files.value = File.TEST_FILES;
	console.log(`Files`, files.value);
}

function fetchVehicle(vehicle: Vehicle){
	vehicle.fetchFiles();
	currentVehicle.value = vehicle;
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

function changeLicenses(newLicenses: License[]){
	licenses.value = newLicenses.map(license => license.getCopy());
	menuLicenses.value = null;
	/* TODO: Update licenses in database */
}

function toggleChargesMenu(){
	fileChargesEnabled.value = !fileChargesEnabled.value;
}

function toggleStatusMenu(){
	changeStatusEnabled.value = !changeStatusEnabled.value;
}

function onChangeStatus(status: boolean, title: string, reason: string){
	console.log(`[Person] Changed status:`, status, title, reason);
	toggleStatusMenu();
}

function onFileCharges(laws: Law[]){
	console.log(`[Person] Charges:`, laws);
	toggleChargesMenu();
}

const buttons = new Map<string, () => void>()
	.set('Status Andern', toggleStatusMenu)
	.set('Fahrzeuge', fetchVehicles)
	.set('Akte vergeben', toggleChargesMenu)
	.set('Lizenz entnehmen', openLicenseMenu);

</script>

<!-- 
	This component handles everything the "Person Search" tab has,
	including search, showing a person profile, his vehicles, etc.
	It is independent from the "Vehicle Search" tab,
	thus enabling multitasking simulation in the tablet.
 -->
<template>

	<div v-if="currentVehicle">
		<HistoryBar
			title="Fahrzeugsuche"
			:history="history"
		/>
		<VehicleProfile
			:vehicle="currentVehicle"
			:canSwitchToProfile="false"
		/>
		<VehicleFileHistory
			v-if="currentVehicle.files"
			:files="currentVehicle.files"
		/>
	</div>

	<div v-else-if="vehicles">
		<HistoryBar
			title="Personensuche"
			:history="history"
		/>
		<VehicleList
			v-if="vehicles.length"
			:vehicles="vehicles"
			@setVehicle="fetchVehicle"
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
		<PersonProfile
			:person="currentPerson"
			:buttons="buttons"
			:licenses="licenses"
		/>
		<ActiveFile
			v-if="activeFile"
			:file="activeFile"
			@onActiveFileOpened="toggleChargesMenu"
		/>
		<FileHistory
			v-if="files"
			:files="files"
		/>
		<EditLicenses
			v-if="menuLicenses"
			:licenses="menuLicenses"
			@onClose="menuLicenses = null"
			@onLicenseChange="changeLicenses"
		/>
		<FileCharges
			v-if="fileChargesEnabled"
			:activeFile="activeFile"
			@onClose="toggleChargesMenu"
			@onFileCharges="onFileCharges"
		/>
		<ChangeStatus
			v-if="changeStatusEnabled"
			@onClose="toggleStatusMenu"
			@onChangeStatus="onChangeStatus"
		/>
	</div>

	<div v-else>

		<Title  text="Personensuche" subtitle="Suche eine bestimmte Person." />
		<Search @submit="onSubmit" placeholder="Bitte gebe ein Namen ein" />

		<PersonList
			v-if="persons && persons.length"
			:persons="persons"
			@setPerson="(person) => currentPerson = person"
		/>
		<NotFound
			v-else-if="persons && !persons.length"
			title="Keine Person gefunden"
			subtitle="Wir konnten leider mit Ihrer Suche keine Person finden."
		/>
	</div>
	
</template>