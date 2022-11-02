import { Time } from '@/misc/Time';
import { defineStore } from 'pinia';

export class Law {
	public jailText: string;
	constructor(public type: string, public text: string, public fee: number, public jailTime: number) {
		this.jailText = Time.ms2human(jailTime);
	}
}

export const useLawStore = defineStore({
	id: 'lawStore',
	state: () => ({
		laws: [
			new Law('Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law('Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 1337),
			new Law('Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law('Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 1337),
			new Law('Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law('Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 1337),
			new Law('Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law('Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 1337),
		]
	}),
	actions: {
		setLaws(list: Law[]) {
			this.$state.laws = list;
		},
	},
});