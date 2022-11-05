<script setup lang="ts">
import InfoLicenses from '../../infopanel/InfoLicenses.vue';
import SideMenu from '../../sidemenu/SideMenu.vue';
import SideTitle from '../../sidemenu/SideTitle.vue';
import Button from '../../misc/Button.vue';
import type { License } from '../../models/License';
defineProps<{
	licenses: License[];
}>();

const emit = defineEmits<{
	(e: 'onLicenseChange', licenses: License[]): void,
	(e: 'onClose'): void,
}>();
</script>

<template>
	<SideMenu @onClose="emit('onClose')">
		<div class="w-[254px]">
			<SideTitle title="Lizenz entnehmen" subtitle="Entnehme eine Lizenz von der Person" />
			<InfoLicenses :licenses="licenses" :canToggleLicense="true" />
			<div class="mb-[180px]"></div>
			<Button text="Entnehmen" class="bg-[#4052C8]" @click="emit('onLicenseChange', licenses)" />
			<Button text="Abbrechen" class="bg-[#161616]" @click="emit('onClose')" />
		</div>
	</SideMenu>
</template>