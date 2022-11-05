<script setup lang="ts">
import Title from '../../misc/Title.vue';
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import { Employee } from '../../models/Employee';
import { openProfileTab } from '@/stores/tab';
</script>

<template>
	<main>
		<Title
			text="Employees"
			subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		/>

		<TableContainer>
			<TableHead>
				<TableHeadRow v-for="head in ['Employee Name', 'Rank', 'Activity', 'Status', 'Gehalt']">
					<TableHeadCell>
						{{head}}
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody>
				<TableBodyRow v-for="emp, index in Employee.TEST_EMPLOYEES" :key="index" @click="openProfileTab(emp.id)">
					<TableBodyCell>
						{{emp.name}}
					</TableBodyCell>
					<TableBodyCell>
						{{emp.rank}}
					</TableBodyCell>
					<TableBodyCell>
						<div v-if="emp.activity" class="flex items-center gap-1">
							<div class="w-2 h-2 rounded-full bg-[#8ED336] border-2 border-[#30421a]"></div>
							<div>Online</div>	
						</div>
						<div v-else class="flex items-center gap-1">
							<div class="w-2 h-2 rounded-full bg-[#c84040] border-2 border-[#3f1d1d]"></div>
							<div>Offline</div>	
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<div v-if="emp.status" class="text-[#8ED336]">
							On-Duty
						</div>
						<div v-else class="opacity-60">
							Off-Duty
						</div>
					</TableBodyCell>
					<TableBodyCell>
						$ {{emp.wage}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>
	</main>
</template>