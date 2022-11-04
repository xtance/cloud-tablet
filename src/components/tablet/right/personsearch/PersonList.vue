<script setup lang="ts">
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import type { Person } from './Person';

defineProps<{
	persons: Person[]
}>();

const emit = defineEmits<{
	(e: 'setPerson', person: Person): void
}>();
</script>

<template>
	<TableContainer v-if="persons.length">
		<TableHead>
			<TableHeadRow v-for="head in ['Vorname', 'Nachname', 'Geschlecht', 'Geburtstag', 'Status']">
				<TableHeadCell>
					{{head}}
				</TableHeadCell>
			</TableHeadRow>
		</TableHead>
		<TableBody>
			<TableBodyRow v-for="person in persons" @click="emit('setPerson', person)" :css="person.wantedStatus ? 'background-color: #C84040' : ''">
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
</template>