<script setup lang="ts">
import TableBody from './TableBody.vue';
import TableBodyRow from './TableBodyRow.vue';
import TableCell from './TableCell.vue';
import TableContainer from './TableContainer.vue';
import TableHead from './TableHead.vue';
import TableHeadRow from './TableHeadRow.vue';

const testData = {
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
	<TableContainer>
		<TableHead>
			<TableHeadRow v-for="head in testData.heads">
				<TableCell>
					{{head}}
				</TableCell>
			</TableHeadRow>
		</TableHead>
		<TableBody>
			<TableBodyRow v-for="rows in testData.rows">
				<TableCell v-for="row in rows">
					{{row}}
				</TableCell>
			</TableBodyRow>
		</TableBody>
	</TableContainer>
</template>