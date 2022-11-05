<script setup lang="ts">
import type { VehicleFile } from '../../models/VehicleFile';
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import { Time } from '../../../../misc/Time';
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';
import Button from '../../misc/Button.vue';
defineProps<{
	file: VehicleFile,
}>();
const emit = defineEmits<{
	(e: 'onClose'): void,
}>()
</script>

<template>
	<SideMenu @onClose="emit('onClose')">
		<div class="w-[254px]">
			<SideTitle :title="'#' + file.id + ' File'" subtitle="Information about vehicle status (TODO)" />
			

			<div class="flex justify-between my-[20px]">
				<InfoTripleText class="w-1/2" first="File Number" :second="'#'+file.id" third="" />
				<InfoTripleText class="w-1/2" first="Date" :second="Time.getDDMMYYYY(file.date)" :third="Time.getHHMM(file.date)" />
			</div>

			<div class="flex justify-between mb-[20px]">
				<InfoTripleText class="w-1/2" first="Officer" :second="file.officerName" :third="file.officerRank" />
				<InfoTripleText class="w-1/2" first="Status" :second="file.status ? 'Wanted' : 'Not wanted'" third="" :css="file.status ? 'color: #C84040' : 'color: #8CC840'" />
			</div>

			<InfoTripleText class="w-1/2  mb-[20px]" first="Title" :second="file.title" third="" />

			<div class="text-[10px] opacity-60 mt-[30px] mb-[4px]">Reason</div>
			<p class="">
				{{file.reason}}
			</p>

			<Button text="Schließen" class="bg-[#161616] mt-[30px]" @click="emit('onClose')" />
		</div>
	</SideMenu>
</template>