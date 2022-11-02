<script setup lang="ts">
import TabEntry from './TabEntry.vue';
import { tabs, useTabStore } from '@/stores/tab';
import { onMounted } from 'vue';

/* Debug the needed tab */
onMounted(() => useTabStore().setTab(tabs[2]));
</script>

<template>
	<div class="mt-8 cursor-pointer text-[14px]">
		<div v-for="tab in tabs" :key="tab.name">
			<TabEntry :thisTab="tab" />
		</div>
	</div>
</template>