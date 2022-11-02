<script setup lang="ts">
import Cellular from '@/assets/tablet/Cellular.png';
import Wifi from '@/assets/tablet/Wifi.png';
import Battery from '@/assets/tablet/Battery.png';
</script>

<template>
	<div class="flex items-center gap-1">
		<img :src="Cellular" />
		<img :src="Wifi" />
		<div>100%</div>
		<img :src="Battery" />
	</div>
</template>