<script setup lang="ts">
import Title from '../../misc/Title.vue';
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';

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

const fahrzeuge = {
	heads:  ['Vehicle', 'Vehicle ID', 'Number Plate', 'Owner'],
	rows: [
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksusasuskas'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
		['Porsche Taycan', '#412561', '41215854', 'Matce Fuksus'],
	],
}

</script>

<template>
	<main>
		<Title
			text="Gesuchte Personen & Fahrzeuge"
			subtitle="Hier kannst du sehen, welche Personen oder Fahrzeuge Gesucht werden!"
		/>
		<Title
			text="Personen"
		/>

		<TableContainer>
			<TableHead>
				<TableHeadRow v-for="head in personen.heads">
					<TableHeadCell>
						{{head}}
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody css="max-height: 235px">
				<TableBodyRow v-for="rows in personen.rows">
					<TableBodyCell v-for="row in rows">
						{{row}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>

		
		<Title
			text="Fahrzeuge"
		/>

		<TableContainer>
			<TableHead>
				<TableHeadRow v-for="head in fahrzeuge.heads">
					<TableCell>
						{{head}}
					</TableCell>
				</TableHeadRow>
			</TableHead>
			<TableBody css="max-height: 235px">
				<TableBodyRow v-for="rows in fahrzeuge.rows">
					<TableBodyCell v-for="row in rows">
						{{row}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>

	</main>
</template>