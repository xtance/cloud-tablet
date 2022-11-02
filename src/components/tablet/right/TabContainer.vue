<script setup lang="ts">
import { Tab, useTabStore } from '@/stores/tab';
const tabStore = useTabStore();

defineProps<{
	thisTab: Tab,
}>()
</script>

<template>
	<div class="absolute bottom-0 left-0 p-4">Tab: {{tabStore.currentTab.name}}</div>
	<main v-show="tabStore.currentTab.name === thisTab.name">
		<slot></slot>
	</main>
</template>