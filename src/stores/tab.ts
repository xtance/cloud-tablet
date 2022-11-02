import { ref } from 'vue';
import { defineStore } from 'pinia';

import Citizen from '@/assets/tablet/Citizen.png';
import Vehicle from '@/assets/tablet/Vehicle.png';
import Wanted from '@/assets/tablet/Wanted.png';
import Laws from '@/assets/tablet/Laws.png';
import Employees from '@/assets/tablet/Employees.png';

export class Tab {
	constructor(public name: string, public icon: string) { }
}

export const tabs: Tab[] = [
	new Tab('Citizen search', Citizen),
	new Tab('Vehicle search', Vehicle),
	new Tab('Wanted', Wanted),
	new Tab('Laws', Laws),
	new Tab('Employees', Employees),
];

export const useTabStore = defineStore({
	id: 'tabstore',
	state: () => ({ currentTab: tabs[0] }),
	actions: {
		setTab(newTab: Tab) {
			this.$state.currentTab = newTab;
		},
	},
});
