<script setup lang="ts">
import { Tab, useTabStore } from '@/stores/tab';
const tabStore = useTabStore();

defineProps<{
	thisTab: Tab,
}>()
</script>

<template>
	<div
		@click="tabStore.setTab(thisTab)"
		class="h-[50px] flex items-center rounded-[6px] duration-200"
		:class="tabStore.currentTab.name === thisTab.name ? 'bg-[#4052C8]': 'bg-transparent'"
	>
		<img class="ml-4" width="12" height="12" :src="thisTab.icon" alt="icon" />
		<div class="pl-4">{{ thisTab.name }}</div>
	</div>
</template>