<script setup lang="ts">
import type { File } from './File';
import { Time } from '../../../../misc/Time';
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import Edit from '@/assets/tablet/Edit.png';
import FileIconContainer from './FileIconContainer.vue';

defineProps<{
	file: File,
}>();
</script>

<template>
	<div class="bg-[#0F0F0F] p-[25px] rounded-[10px] mt-[16px]">
		<div class="opacity-60 mb-[18px]">Offene Akte</div>
		<div class="flex justify-between items-center bg-[#111111] rounded-[10px] px-[16px] py-[16px]">
			<InfoTripleText first="Aktennummer" :second="'#'+file.id" third="" />
			<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(file.date)" :third="Time.getHHMM(file.date)" />
			<InfoTripleText first="Aktennummer" :second="file.status ? 'Gesucht' : 'Nicht gesucht'" :third="file.description" />
			<FileIconContainer :src="Edit" css="background-color: #4052C8" />
		</div>
	</div>
</template>