<script setup lang="ts">
import type { VehicleFile } from '../../models/VehicleFile';
import Eye from '@/assets/tablet/Eye.png';
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import { Time } from '../../../../misc/Time';
import FileIconContainer from '../personsearch/FileIconContainer.vue';
import { ref } from 'vue';
import VehicleActiveFile from './VehicleActiveFile.vue';
defineProps<{
	files: VehicleFile[],
}>();

const currentFile = ref<VehicleFile|null>(null);
</script>

<template>
	<div class="opacity-60 mb-[18px]">Aktenverlauf</div>
	<div v-for="file in files">
		<div class="flex justify-between items-center bg-[#111111] rounded-[10px] px-[16px] py-[16px] mb-[10px]">
			<InfoTripleText first="Aktennummer" :second="'#'+file.id" third="" />
			<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(file.date)" :third="Time.getHHMM(file.date)" />
			<InfoTripleText first="Status" :second="file.status ? 'Gesucht' : 'Nicht gesucht'" :third="file.title" />
			<FileIconContainer @click="currentFile = file" :src="Eye" />
		</div>
	</div>
	<VehicleActiveFile
		v-if="currentFile"
		:file="currentFile"
		@onClose="currentFile = null"
	/>
</template>