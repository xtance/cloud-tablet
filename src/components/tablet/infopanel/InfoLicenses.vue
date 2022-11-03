<script setup lang="ts">
import type { License } from '../right/citizensearch/License';
import License_Weapon from '@/assets/tablet/License_Weapon.png';
import License_Plane from '@/assets/tablet/License_Plane.png';
import License_Ship from '@/assets/tablet/License_Ship.png';
import License_Scooter from '@/assets/tablet/License_Scooter.png';
import License_Truck from '@/assets/tablet/License_Truck.png';
import License_Car from '@/assets/tablet/License_Car.png';
defineProps<{
	licenses: License[],
}>();

function getLicenseImage(license: License): string {
	switch (license.type){
		case 'car': return License_Car;
		case 'plane': return License_Plane;
		case 'scooter': return License_Scooter;
		case 'ship': return License_Ship;
		case 'truck': return License_Truck;
		case 'weapon': return License_Weapon;
		default: return '';
	}
}
</script>

<template>
	<div class="opacity-60 text-[10px] mb-[4px]">
		Licenses	
	</div>
	<div class="flex">
		<div
			v-for="license in licenses"
			:key="license.type"
			class="flex justify-center items-center rounded-[8px] cursor-pointer w-[38px] h-[38px] mr-[12px]"
			:class="license.isActive ? 'bg-[#4052C8]' : 'bg-[#111111]'"
		>
			<img
				:src="getLicenseImage(license)"
				class=""
			/>
		</div>
	</div>
</template>