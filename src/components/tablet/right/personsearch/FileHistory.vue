<script setup lang="ts">
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import { Time } from '../../../../misc/Time';
import Eye from '@/assets/tablet/Eye.png';
import type { File } from '../../models/File';
import FileIconContainer from './FileIconContainer.vue';
import { ref } from 'vue';
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';
import { computed } from '@vue/reactivity';
import Button from '../../misc/Button.vue';
import InfoText from '../../infopanel/InfoText.vue';
import NotFound from '../../notfound/NotFound.vue';
import type { Violation } from '../../models/Violation';


const currentFile = ref<File|null>(null);
const currentViolation = ref<Violation|null>(null);

const finalPrice = ref(0);
const finalJailTime = ref(0);

function fetchFile(file: File){
	file.fetchViolations();
	console.log(`[FileHistory] Fetching the file`, file);
	currentFile.value = file;
	finalPrice.value = 0;
	finalJailTime.value = 0;
	file.violations?.forEach(vio => {
		if (!vio.law) return; /* This should display an error - a law not found for the violation */
		finalPrice.value += vio.law.fee;
		finalJailTime.value += vio.law.jailTime;
	});
}

function close(){
	currentViolation.value = null;
	currentFile.value = null;
}

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
				<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(file.createdDate)" :third="Time.getHHMM(file.createdDate)" />
				<InfoTripleText first="Status" :second="file.status ? 'Gesucht' : 'Nicht gesucht'" :third="file.description" />
				<FileIconContainer @click="fetchFile(file)" :src="Eye" />
			</div>
		</div>
	</div>

	<SideMenu v-if="currentFile" @onClose="close">
		<div class="w-[518px]">
			<SideTitle title="Change status" subtitle="Fill in the information to change a person's status" />
			
			<!-- Display info about violation (if it was selected, otherwise the file info.) -->
			<div v-if="currentViolation" class="flex justify-between items-start rounded-[10px] px-[16px] py-[16px] mb-[10px]">
				<InfoTripleText first="Aktennummer" :second="'#'+currentViolation.id" third="" />
				<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(currentViolation.date)" :third="Time.getHHMM(currentViolation.date)" />
				<InfoTripleText first="Officer" :second="currentViolation.officerName" :third="currentViolation.officerRank" />
			</div>
			<div v-else class="flex justify-between items-start rounded-[10px] px-[16px] py-[16px] mb-[10px]">
				<InfoTripleText first="File Datum" :second="Time.getDDMMYYYY(currentFile.createdDate)" :third="Time.getHHMM(currentFile.createdDate)" />
			</div>

			<SideTitle title="Fines" subtitle="" />
			<div class="h-[320px] overflow-y-hidden mr-[-30px] mb-[20px]">
				<div class="h-full overflow-auto pr-[25px] ">
					<div
						v-if="currentFile.violations && currentFile.violations.length"
						v-for="(violation, index) in currentFile.violations"
						:key="index"
						class="flex justify-between items-start bg-[#111111] rounded-[10px] px-[16px] py-[16px] mb-[10px] cursor-pointer"
						@click="currentViolation = violation"
					>
						<InfoText :class="'w-1/2'" desc="Law" :text="violation.law ? violation.law.text : 'No Law'" style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Price" :text="violation.law ? '$ '+ violation.law.fee : ''"  style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Jail Time" :text="violation.law ? Time.ms2human(violation.law.jailTime) : ''"  style="font-size: 14px" />
					</div>

					<NotFound v-else title="Keine Law gefunden" subtitle="" />
				</div>
			</div>
			
			<SideTitle title="Statistics" subtitle="" />

			<div class="flex divide-x bg-white rounded-[10px]" v-if="currentFile.violations">
				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Violations</div>
					<div class="text-[18px] text-black">{{currentFile.violations.length}} laws</div>
				</div>
				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Price</div>
					<div class="text-[18px] text-black">{{finalPrice}}</div>
				</div>
				<div class="px-5 py-3 w-1/2">
					<div class="text-[12px] opacity-60 text-[#161616]">Jail Time</div>
					<div class="text-[18px] text-black">{{finalJailTime ? Time.ms2human(finalJailTime) : 'None'}}</div>
				</div>
			</div>

			<div class="flex justify-end">
				<Button text="Close" class="bg-[#4052C8] mt-[20px] w-[140px]" @click="close" />
			</div>
			
		</div>
	</SideMenu>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
}
 
::-webkit-scrollbar-track {
    border-radius: 5px 0px 0px 5px;
	background: rgba(255, 255, 255, 0.09);
}
 
::-webkit-scrollbar-thumb {
    border-radius: 5px 0px 0px 5px;
	background: white;
}
</style>