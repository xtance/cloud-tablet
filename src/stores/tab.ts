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
	new Tab('Personensuche', Citizen),
	new Tab('Fahrzeugsuche', Vehicle),
	new Tab('Gesuchte Personen', Wanted),
	new Tab('Gesetze', Laws),
	new Tab('Angestellte', Employees),
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