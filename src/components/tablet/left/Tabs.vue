<script setup lang="ts">
import Tab from './Tab.vue';
import { tabs } from '@/stores/tab';
</script>

<template>
	<div class="mt-8 cursor-pointer text-[14px]">
		<div v-for="tab in tabs" :key="tab.name">
			<Tab :thisTab="tab" />
		</div>
	</div>
</template>