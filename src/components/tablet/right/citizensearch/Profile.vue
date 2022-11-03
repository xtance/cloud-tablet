<script setup lang="ts">
import InfoImage from '../../infopanel/InfoImage.vue';
import InfoPanelContainer from '../../infopanel/InfoPanelContainer.vue';
import InfoText from '../../infopanel/InfoText.vue';
import InfoButtons from '../../infopanel/InfoButtons.vue';
import InfoLicenses from '../../infopanel/InfoLicenses.vue';
import NoImage from '@/assets/tablet/NoImage.png';
import { License } from './License';
import { ref } from 'vue';


import type { Person } from './Person';

const licenses = ref<License[]>([]);
licenses.value = getPlayerLicenses();

/* This also should fetch licenses from somewhere */
function getPlayerLicenses(){
	return [
		new License('car', true),
		new License('truck', true),
		new License('scooter', false),
		new License('ship', false),
		new License('plane', true),
		new License('weapon', false),
	]
}


defineProps<{
	person: Person,
	buttons: Map<string, () => void>,
}>();

</script>

<template>
	<InfoPanelContainer>
		<!-- Image, licenses and info -->
		<div class="">

			<!-- Image + info -->
			<div class="flex justify-between">
				<InfoImage :src="NoImage" />
				<div class="pl-4">
					<InfoText desc="Vorname" :text="person.firstName" />
					<InfoText desc="Geburtsdatum" :text="person.bornDate" />
					<InfoText desc="ID" :text="'#' + person.id" />
					<InfoText desc="Beruf" :text="person.fractionName" />
				</div>
				<div class="pl-4">
					<InfoText desc="Nachname" :text="person.lastName" />
					<InfoText desc="Geschlecht" :text="person.gender ? 'Female' : 'Male'" />
					<InfoText desc="Status" :text="person.wantedStatus ? 'Gesucht' : 'Nicht gesucht'" :css="person.wantedStatus ? 'color: #C84040' : 'color: #8CC840'" />
					<InfoText desc="Phone Number" :text="person.phoneNumber" />
				</div>
			</div>

			<!-- Licenses -->
			<InfoLicenses :licenses="licenses" />
		</div>

		<!-- Buttons on the right -->
		<InfoButtons :buttons="buttons" />
	</InfoPanelContainer>
</template>