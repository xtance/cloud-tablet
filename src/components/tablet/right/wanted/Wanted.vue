<script setup lang="ts">
import Title from '../../misc/Title.vue';
import Table from '../../misc/Table.vue';

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
		<Table
			:heads="personen.heads"
			:rows="personen.rows"
		/>
		<Title
			text="Fahrzeuge"
		/>
		<Table
			:heads="fahrzeuge.heads"
			:rows="fahrzeuge.rows"
		/>
	</main>
</template>