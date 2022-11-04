import { Time } from '@/misc/Time';
import { defineStore } from 'pinia';

export const lawTypes = ['All', 'Straßenverkehrsordnung', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', 'Drogendialekte', ] as const;

export class Law {
	public jailText: string;
	constructor(public id: number, public type: typeof lawTypes[number], public text: string, public fee: number, public jailTime: number) {
		this.jailText = Time.ms2human(jailTime);
	}
}

export const useLawStore = defineStore({
	id: 'lawStore',
	state: () => ({
		laws: [
			new Law(1, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 7200000 + 2100000 + 25000),
			new Law(2, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 2100000 + 25000),
			new Law(3, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law(4, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 25500, 2100000 + 25000),
			new Law(5, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law(6, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 1337),
			new Law(7, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 500, 100000),
			new Law(8, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet dolor sitdolor sit amet lorem ipsum', 25500, 2100000 + 25000),
			new Law(9, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 25500, 1337),
			new Law(10, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
			new Law(11, 'Drogendialekte', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 25500, 2100000 + 25000),
			new Law(12, 'Straßenverkehrsordnung', 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', 500, 100000),
		]
	}),
	actions: {
		setLaws(list: Law[]) {
			this.$state.laws = list;
		},
	},
});