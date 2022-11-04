<script setup lang="ts">
import { License, LicenseStatus } from '../right/personsearch/License';
import License_Weapon from '@/assets/tablet/License_Weapon.png';
import License_Plane from '@/assets/tablet/License_Plane.png';
import License_Ship from '@/assets/tablet/License_Ship.png';
import License_Scooter from '@/assets/tablet/License_Scooter.png';
import License_Truck from '@/assets/tablet/License_Truck.png';
import License_Car from '@/assets/tablet/License_Car.png';
defineProps<{
	licenses: License[],
	canToggleLicense: boolean,
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
			class="flex justify-center items-center rounded-[8px] cursor-pointer w-[38px] h-[38px] mr-[6px]"
			:class="license.status ? (license.status === LicenseStatus.ACTIVE ? 'bg-[#4052C8]' : 'bg-white') : 'bg-[#111111]'"
			@click="canToggleLicense && license.toggleStatus()"
		>
			<img
				:src="getLicenseImage(license)"
				:class="license.status ? (license.status === LicenseStatus.ACTIVE ? '' : 'invert') : 'opacity-60'"
			/>
		</div>
	</div>
</template>