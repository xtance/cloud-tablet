<script setup lang="ts">
import Indicators from './Indicators.vue';
import TimeDate from './TimeDate.vue';
</script>

<template>
	<div class="absolute top-0 w-full flex items-center px-4 justify-between h-[24px] text-[12px]">
		<TimeDate />
		<Indicators />
	</div>
</template>