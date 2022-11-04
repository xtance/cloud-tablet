<script setup lang="ts">
import InfoTripleText from '../../infopanel/InfoTripleText.vue';
import { Time } from '../../../../misc/Time';
import Eye from '@/assets/tablet/Eye.png';
import type { File } from './File';
import FileIconContainer from './FileIconContainer.vue';
import { ref } from 'vue';
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';
import { computed } from '@vue/reactivity';
import { Law, useLawStore } from '@/stores/laws';
import Button from '../../misc/Button.vue';


import InfoText from '../../infopanel/InfoText.vue';
import NotFound from '../../notfound/NotFound.vue';

const { laws } = useLawStore();
const currentFile = ref<File|null>(null);

const fileLaws = computed<Law[]|null>(() => {
	if (!currentFile.value) return null;
	return laws.filter(law => currentFile.value?.lawIDs.includes(law.id));
});

const finalPrice = computed(() => fileLaws.value ? fileLaws.value.reduce((value, law) => value + law.fee, 0) : 0);
const finalJailTime = computed(() => fileLaws.value ? fileLaws.value.reduce((value, law) => value + law.jailTime, 0) : 0);

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
				<InfoTripleText first="Status" :second="file.status ? 'Gesucht' : 'Nicht gesucht'" :third="file.description" />
				<FileIconContainer @click="currentFile = file" :src="Eye" />
			</div>
		</div>
	</div>

	<SideMenu v-if="currentFile" @onClose="currentFile = null">
		<div class="w-[518px]">
			<SideTitle title="Change status" subtitle="Fill in the information to change a person's status" />
			
			<div class="flex justify-between items-start rounded-[10px] px-[16px] py-[16px] mb-[10px]">
				<InfoTripleText first="Aktennummer" :second="'#'+currentFile.id" third="" />
				<InfoTripleText first="Datum" :second="Time.getDDMMYYYY(currentFile.date)" :third="Time.getHHMM(currentFile.date)" />
				<InfoTripleText first="Officer" :second="currentFile.officerName" :third="currentFile.officerRank" />
			</div>

			<SideTitle title="Fines" subtitle="" />
			<div class="h-[320px] overflow-y-hidden mr-[-30px] mb-[20px]">
				<div class="h-full overflow-auto pr-[25px] ">
					<div
						v-if="fileLaws && fileLaws.length"
						v-for="(law, index) in fileLaws"
						:key="index"
						class="flex justify-between items-start bg-[#111111] rounded-[10px] px-[16px] py-[16px] mb-[10px] cursor-pointer"
					>
						<InfoText :class="'w-1/2'" desc="Law" :text="law.text" style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Price" :text="'$ '+law.fee"  style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Jail Time" :text="Time.ms2human(law.jailTime)"  style="font-size: 14px" />
					</div>

					<NotFound v-else title="Keine Law gefunden" subtitle="" />
				</div>
			</div>
			
			<SideTitle title="Statistics" subtitle="" />

			<div class="flex divide-x bg-white rounded-[10px]" v-if="fileLaws">
				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Violations</div>
					<div class="text-[18px] text-black">{{fileLaws.length}} laws</div>
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
				<Button text="Close" class="bg-[#4052C8] mt-[20px] w-[140px]" @click="currentFile = null" />
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