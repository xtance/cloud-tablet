<script setup lang="ts">
	import Search from '@/assets/tablet/Search.png';
</script>

<template>
	<div class="flex justify-center mt-[60px]">
		<div class="p-[22px] bg-[#0F0F0F] rounded-full">
			<img :src="Search" width="16" height="16" />
		</div>
	</div>
	
	<div
		class="text-center font-bold text-[18px] my-[10px]"
	>
		Keine Person gefunden
	</div>

	<p class="text-center text-[12px] opacity-60">
		Wir konnten leider mit Ihrer Suche <br>
		keine Person finden.
	</p>
</template>