<script setup lang="ts">
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import { Time } from '../../../../misc/Time';
import Eye from '@/assets/tablet/Eye.png';
import type { File } from './File';
import FileIconContainer from './FileIconContainer.vue';

defineProps<{
	files: File[]
}>();
</script>

<template>
	<div class="bg-[#0F0F0F] p-[25px] rounded-[10px] mt-[16px]">
		<div class="opacity-60 mb-[18px]">Aktenverlauf</div>
		<div v-for="file in files">
			<div class="flex justify-between items-center bg-[#111111] rounded-[10px] px-[16px] py-[16px] mb-[10px]">
				<InfoTripleText first="Aktennummer" :second="'#'+file.id" third="" />
				<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(file.date)" :third="Time.getHHMM(file.date)" />
				<InfoTripleText first="Aktennummer" :second="file.status ? 'Gesucht' : 'Nicht gesucht'" :third="file.description" />
				<FileIconContainer :src="Eye" />
			</div>
		</div>
	</div>
</template>