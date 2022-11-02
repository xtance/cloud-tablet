<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Table from '../../misc/Table.vue';
import TableExample from '../../table/TableExample.vue';

const personen = {
	heads:  ['Vorname', 'Nachname', 'ID', 'Geschlecht', 'Geburtstag'],
	rows: [
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
		['Matce', 'Fuksus', '#5412123', 'Male', '01.01.1999'],
	],
}
</script>

<template>
	<main>
		<Title
			text="Employees"
			subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		/>
		<TableExample></TableExample>
		<!-- <Table
			:heads="personen.heads"
			:rows="personen.rows"
		/> -->
	</main>
</template>