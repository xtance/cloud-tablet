<script setup lang="ts">
import Title from '../../misc/Title.vue';
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import { useLawStore } from '@/stores/laws';

const tableHead = ['Law', 'Price', 'Jailtime'];
const store = useLawStore();
</script>

<template>
	<main>
		<Title
			text="Employees"
			subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		/>

		<TableContainer>
			<TableHead>
				<TableHeadRow v-for="head in tableHead">
					<TableHeadCell>
						{{head}}
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody>
				<TableBodyRow v-for="law in store.laws">
					<TableBodyCell>
						<p>
							{{law.text}}
						</p>
					</TableBodyCell>
					<TableBodyCell>
						$ {{law.fee}}
					</TableBodyCell>
					<TableBodyCell>
						{{law.jailText}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>
	</main>
</template>