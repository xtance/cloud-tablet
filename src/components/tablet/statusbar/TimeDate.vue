<script setup lang="ts">
	import { ref } from 'vue';
	const timeText = ref('5:54 PM');
	const dateText = ref('09-04 Sun');
	const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	/* Will add zeroes before a number, example: 5 -> 05, 15 -> 15 */
	function pad2(num: number|string){
		return ('0'+num).slice(-2)
	}

	function updateTimeDate(){
		const date = new Date();
		timeText.value = date.getHours() + ':' + pad2(date.getMinutes());
		dateText.value = pad2(date.getMonth() + 1) + '-' + pad2(date.getDate()) + ' ' + week[date.getDay()];
	}

	updateTimeDate();
	setInterval(updateTimeDate, 1000 * 60);
</script>

<template>
	<div class="flex gap-4">
		<div>
			{{timeText}}
		</div>
		<div>
			{{dateText}}
		</div>
	</div>
</template>
