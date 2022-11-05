<script setup lang="ts">
import InfoPanelContainer from '../../infopanel/InfoPanelContainer.vue';
import VehicleChangeStatus from './VehicleChangeStatus.vue';
import InfoText from '../../infopanel/InfoText.vue';
import InfoButtons from '../../infopanel/InfoButtons.vue';
import type { Vehicle } from '../../models/Vehicle';
import { openProfileTab } from '@/stores/tab';
import { ref } from 'vue';


defineProps<{
	vehicle: Vehicle,
	canSwitchToProfile: boolean,
}>();

const changeStatusEnabled = ref(false);

const buttons = new Map<string, () => void>().set('Status Andern', toggleStatus);

function toggleStatus(){
	changeStatusEnabled.value = !changeStatusEnabled.value;
}

function onChangeStatus(status: boolean, title: string, reason: string){
	console.log(`[Vehicle Profile] Vehicle Status changed`, status, title, reason);
	toggleStatus();
}

</script>

<template>
	<InfoPanelContainer>
		<div class="">
			<div class="flex justify-between">
				<div class="">
					<InfoText desc="Name" :text="vehicle.name" />
					<InfoText desc="Vehicle Owner" text="TODO (Owner Name)" @click="canSwitchToProfile && openProfileTab(vehicle.ownerID)" class="cursor-pointer" />
				</div>
				<div class="pl-4">
					<InfoText desc="Number plate" :text="vehicle.numberPlate" />
					<InfoText desc="Status" :text="vehicle.status ? 'Gesucht' : 'Nicht gesucht'" :css="vehicle.status ? 'color: #C84040' : 'color: #8CC840'" />
				</div>
			</div>
		</div>

		<!-- Buttons on the right -->
		<InfoButtons :buttons="buttons" />
	</InfoPanelContainer>

	<VehicleChangeStatus
		v-if="changeStatusEnabled"
		@onClose="toggleStatus"
		@onChangeStatus="onChangeStatus"
	/>
</template>