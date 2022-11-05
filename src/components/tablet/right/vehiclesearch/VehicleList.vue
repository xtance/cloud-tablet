<script setup lang="ts">
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import type { Vehicle } from '../../models/Vehicle';

defineProps<{
	vehicles: Vehicle[]
}>();

const emit = defineEmits<{
	(e: 'setVehicle', vehicle: Vehicle): void
}>();
</script>

<template>
	<TableContainer v-if="vehicles.length">
		<TableHead>
			<TableHeadRow v-for="head in ['ID', 'Name', 'Numberplate', 'Status']">
				<TableHeadCell>
					{{head}}
				</TableHeadCell>
			</TableHeadRow>
		</TableHead>
		<TableBody>
			<TableBodyRow v-for="vehicle in vehicles" @click="emit('setVehicle', vehicle)" :css="vehicle.status ? 'background-color: #C84040' : ''">
				<TableBodyCell>
					#{{vehicle.id}}
				</TableBodyCell>
				<TableBodyCell>
					{{vehicle.name}}
				</TableBodyCell>
				<TableBodyCell>
					{{vehicle.numberPlate}}
				</TableBodyCell>
				<TableBodyCell>
					{{vehicle.status ? 'Wanted' : 'Not Wanted'}}
				</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</TableContainer>
</template>