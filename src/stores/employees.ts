import { defineStore } from 'pinia';

export class Employee {
	constructor(public name: string, public rank: string, public activity: boolean, public status: boolean, public wage: number = 100) { }
}

export const useEmployeeStore = defineStore({
	id: 'employeeStore',
	state: () => ({
		employees: [
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
			new Employee('Matce Fuksus', 'Rankname', true, true),
			new Employee('Matce Fuksus', 'Rankname', false, false),
			new Employee('Matce Fuksus', 'Rankname', true, false),
			new Employee('Matce Fuksus', 'Rankname', false, true),
		]
	}),
	actions: {
		setEmployees(list: Employee[]) {
			this.$state.employees = list;
		},
	},
});