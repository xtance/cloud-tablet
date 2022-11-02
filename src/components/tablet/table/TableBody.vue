<script setup lang="ts">
defineProps<{
	css?: string;
}>();
</script>

<!-- Table body -->
<template>
	<div class="overflow-y-hidden">
		<div class="overflow-y-scroll px-4" :style="css">
			<slot></slot>
		</div>
	</div>
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