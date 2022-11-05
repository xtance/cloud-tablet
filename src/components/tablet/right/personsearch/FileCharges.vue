<script setup lang="ts">
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';


import { ref, computed, toRaw, onMounted } from 'vue';
import InfoText from '../../infopanel/InfoText.vue';
import { Time } from '@/misc/Time';
import Bar from '../../bar/Bar.vue';
import Button from '../../misc/Button.vue';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';
import { Law, lawTypes } from '../../models/Law';
import type { File } from '../../models/File';

const buttons = lawTypes.map(it => it); /* creating a copy of readonly array */

let laws = Law.TEST_LAWS; /* the */
const checkedLaws = ref<Set<Law>>(new Set());

const onButtonChange = (index: number) => laws = (index ? Law.TEST_LAWS.filter(law => law.type === buttons[index]) : Law.TEST_LAWS);
const onLawSearch = (text: string) => laws = (text ?  Law.TEST_LAWS.filter(law => law.text.includes(text)) : Law.TEST_LAWS);


const props = defineProps<{
	/* the current file is defined when clicking "edit", and undefined when using "file charges" button */
	activeFile: File|null,
}>();

/* in case there's a file, we should update checked laws */
onMounted(() => {
	if (!props.activeFile) return;
	props.activeFile.fetchViolations();
	props.activeFile.violations?.forEach(vio => {
		if (!vio.law) return;
		checkedLaws.value.add(vio.law);
	});
	console.log(`[Checked laws] `, checkedLaws.value);
});

function toggleLaw(law: Law){
	if (checkedLaws.value.has(law)) checkedLaws.value.delete(law);
	else checkedLaws.value.add(law);
	calc();
}

const finalPrice = ref(0);
const finalJailTime = ref(0);

function calc(){
	finalPrice.value = 0;
	finalJailTime.value = 0;
	for (const law of checkedLaws.value){
		finalPrice.value += law.fee;
		finalJailTime.value += law.jailTime;
	}
}

const emit = defineEmits<{
	(e: 'onClose'): void,
	(e: 'onFileCharges', laws: Law[]): void,
}>();



</script>

<template>
	<SideMenu @onClose="emit('onClose')">
		<div class="w-[528px] h-full flex flex-col justify-between">
			<SideTitle title="Akte vergeben" subtitle="Fill in the information to change a person's status" />

			<div class="flex divide-x bg-white rounded-[10px]">
				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Violations</div>
					<div class="text-[18px] text-black">{{checkedLaws.size}} laws</div>
				</div>
				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Price</div>
					<div class="text-[18px] text-black">$ {{finalPrice}}</div>
				</div>
				<div class="px-5 py-3 w-1/2">
					<div class="text-[12px] opacity-60 text-[#161616]">Jail Time</div>
					<div class="text-[18px] text-black">{{finalJailTime ? Time.ms2human(finalJailTime) : 'None'}}</div>
				</div>
			</div>


			<Bar
				:buttons="buttons"
				@change="onButtonChange"
			/>

			<Search
				placeholder=""
				@submit="onLawSearch"
			/>

			<div class="h-[350px] overflow-y-hidden mr-[-30px]">
				<div class="h-full overflow-auto pr-[25px] ">
					<div
						v-if="laws.length"
						v-for="(law, index) in laws"
						:key="index"
						@click="toggleLaw(law)"
						class="flex justify-between items-start bg-[#111111] rounded-[10px] px-[16px] py-[16px] mb-[10px] cursor-pointer"
					>
						<InfoText :class="'w-1/2'" desc="Law" :text="law.text" style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Price" :text="'$ '+law.fee"  style="font-size: 14px" />
						<InfoText :class="'w-1/5'" desc="Jail Time" :text="Time.ms2human(law.jailTime)"  style="font-size: 14px" />

						<div
							class="rounded-[5px] w-[20px] h-[20px] flex justify-center items-center"
							:class="checkedLaws.has(law) ? 'bg-[#8CC840]' : 'bg-white opacity-5'"
						>
							<div v-if="checkedLaws.has(law)" class="rounded-full w-[8px] h-[8px] bg-white">

							</div>
						</div>
					</div>

					<NotFound v-else title="Keine Law gefunden" subtitle="" />
				</div>
			</div>

			<div class="flex justify-end gap-4 mt-[20px]">
				<Button class="w-1/3 bg-[#161616] mb-0" @click="emit('onClose')" text="Cancel" />
				<Button class="w-1/3 bg-[#4052C8] mb-0" @click="emit('onFileCharges', Array.from(checkedLaws))" text="File Charges" />
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