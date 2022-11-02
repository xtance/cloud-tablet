<script setup lang="ts">
defineProps<{
	heads: string[],
	rows: string[][],
}>();
</script>

<template>
	<!-- Much better than <table> -->
	<div class="py-[14px] bg-[#0F0F0F] rounded-[10px] mb-[16px]">

		<!-- Table head -->
		<div class="flex mb-[10px] px-4">
			<div class="w-full text-[12px] leading-[14px] px-[15px] opacity-60" v-for="text in heads">
				{{text}}
			</div>
		</div>

		<!-- Table body -->
		<div class="overflow-y-hidden">
			<div class="overflow-y-scroll max-h-[235px] px-4">
				<div class="flex bg-[#0e0e0e] mb-[10px]" v-for="row in rows">
					<div class="w-full p-[15px] rounded-[6px] whitespace-nowrap" v-for="text in row">
						{{text}}
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<style>
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