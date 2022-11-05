<script setup lang="ts">
import Title from '../../misc/Title.vue';
import TableBody from '../../table/TableBody.vue';
import TableBodyRow from '../../table/TableBodyRow.vue';
import TableHeadCell from '../../table/TableHeadCell.vue';
import TableBodyCell from '../../table/TableBodyCell.vue';
import TableContainer from '../../table/TableContainer.vue';
import TableHead from '../../table/TableHead.vue';
import TableHeadRow from '../../table/TableHeadRow.vue';
import Bar from '../../bar/Bar.vue';

import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import Search from '../../search/Search.vue';
import NotFound from '../../notfound/NotFound.vue';
import { Law, lawTypes } from '../../models/Law';

const buttons = lawTypes.map(it => it); /* creating a copy of readonly array */

const activeIndex = ref(0);
const onButtonChange = (index: number) => activeIndex.value = index;

const searchText = ref('');
const laws = computed(() => {
	if (searchText.value.length) return Law.TEST_LAWS.filter(law => law.text.includes(searchText.value));
	else if (activeIndex.value) return Law.TEST_LAWS.filter(law => law.type === buttons[activeIndex.value]);
	else return Law.TEST_LAWS;
});

function onLawSearch(text: string){
	searchText.value = text;
}
</script>

<template>
	<main>
		<Title
			text="Gesetze"
			subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
		/>

		<Bar
			:buttons="buttons"
			:active="activeIndex"
			@change="onButtonChange"
		/>

		<Search
			placeholder=""
			@submit="onLawSearch"
		/>

		<TableContainer v-if="laws.length">
			<TableHead>
				<TableHeadRow>
					<TableHeadCell css="width: 60%">
						Law
					</TableHeadCell>
					<TableHeadCell css="width: 15%">
						Price
					</TableHeadCell>
					<TableHeadCell css="width: 25%">
						Jailtime
					</TableHeadCell>
				</TableHeadRow>
			</TableHead>
			<TableBody>
				<TableBodyRow v-for="law in laws">
					<TableBodyCell css="width: 60%">
						<p class="whitespace-normal">
							{{law.text}}
						</p>
					</TableBodyCell>
					<TableBodyCell css="width: 15%">
						$ {{law.fee}}
					</TableBodyCell>
					<TableBodyCell css="width: 25%">
						{{law.jailText}}
					</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</TableContainer>

		<NotFound v-else title="Keine Law gefunden" subtitle="This is subtitle text that should be changed" />
	</main>
</template>