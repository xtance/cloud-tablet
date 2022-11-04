<script setup lang="ts">
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';


import { useLawStore, lawTypes, Law } from '@/stores/laws';
import { ref, computed } from 'vue';
import InfoText from '../../infopanel/InfoText.vue';
import { Time } from '@/misc/Time';
import Bar from '../../bar/Bar.vue';
import Button from '../../misc/Button.vue';

const store = useLawStore();
const buttons = lawTypes.map(it => it); /* creating a copy of readonly array */

const activeIndex = ref(0);
const onButtonChange = (index: number) => activeIndex.value = index;

const laws = computed(() => {
	if (activeIndex.value) return store.laws.filter(law => law.type === buttons[activeIndex.value]);
	else return store.laws;
});

const checkedLaws = ref<Law[]>([]);

function toggleLaw(law: Law){
	if (checkedLaws.value.includes(law)) return checkedLaws.value = checkedLaws.value.filter(l => l !== law);
	checkedLaws.value.push(law);
}

const emit = defineEmits<{
	(e: 'onClose'): void,
	(e: 'onFileCharges', laws: Law[]): void,
}>();

const finalPrice = computed(() => '$ ' + (checkedLaws.value.reduce((value, law) => value + law.fee, 0)));
const finalJailTime = computed(() => checkedLaws.value.reduce((value, law) => value + law.jailTime, 0));


</script>

<template>
	<SideMenu @onClose="emit('onClose')">
		<div class="w-[528px] h-full flex flex-col justify-between">
			<SideTitle title="Akte vergeben" subtitle="Fill in the information to change a person's status" />

			<div class="flex divide-x bg-white rounded-[10px]">

				<div class="px-5 py-3 w-1/4">
					<div class="text-[12px] opacity-60 text-[#161616]">Violations</div>
					<div class="text-[18px] text-black">{{checkedLaws.length}} laws</div>
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


			<Bar
				:buttons="buttons"
				:active="activeIndex"
				@change="onButtonChange"
			/>

			<div class="h-[420px] overflow-y-hidden mr-[-30px]">
				<div class="h-full overflow-auto pr-[25px] ">
					<div
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
							:class="checkedLaws.includes(law) ? 'bg-[#8CC840]' : 'bg-white opacity-5'"
						>
							<div v-if="checkedLaws.includes(law)" class="rounded-full w-[8px] h-[8px] bg-white">

							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-end gap-4 mt-[20px]">
				<Button class="w-1/3 bg-[#161616] mb-0" @click="emit('onClose')" text="Cancel" />
				<Button class="w-1/3 bg-[#4052C8] mb-0" @click="emit('onFileCharges', checkedLaws)" text="File Charges" />
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