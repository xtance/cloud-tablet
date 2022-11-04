<script setup lang="ts">
import { Tab, useTabStore } from '@/stores/tab';
const tabStore = useTabStore();

defineProps<{
	thisTab: Tab,
}>()
</script>

<template>
	<main v-show="tabStore.currentTab.name === thisTab.name">
		<slot></slot>
	</main>
</template>