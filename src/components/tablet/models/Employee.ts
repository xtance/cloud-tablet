
/* These are actually Persons, and the ids are the same, but different model due to different values. */
export class Employee {
	constructor(
		public id: number, 
		public name: string,
		public rank: string,
		public activity: boolean,
		public status: boolean,
		public wage: number = 100
	){}

	static TEST_EMPLOYEES = [
		new Employee(1, 'Matce Fuksus', 'Rankname', true, true),
		new Employee(2, 'Matce Fuksus', 'Rankname', false, false),
		new Employee(3, 'Matce Fuksus', 'Rankname', true, false),
		new Employee(4, 'Matce Fuksus', 'Rankname', false, true),
		new Employee(1, 'Matce Fuksus', 'Rankname', true, true),
		new Employee(2, 'Matce Fuksus', 'Rankname', false, false),
		new Employee(3, 'Matce Fuksus', 'Rankname', true, false),
		new Employee(4, 'Matce Fuksus', 'Rankname', false, true),
		new Employee(1, 'Matce Fuksus', 'Rankname', true, true),
		new Employee(2, 'Matce Fuksus', 'Rankname', false, false),
		new Employee(3, 'Matce Fuksus', 'Rankname', true, false),
		new Employee(4, 'Matce Fuksus', 'Rankname', false, true),
		new Employee(1, 'Matce Fuksus', 'Rankname', true, true),
		new Employee(2, 'Matce Fuksus', 'Rankname', false, false),
		new Employee(3, 'Matce Fuksus', 'Rankname', true, false),
		new Employee(4, 'Matce Fuksus', 'Rankname', false, true),
		new Employee(1, 'Matce Fuksus', 'Rankname', true, true),
		new Employee(2, 'Matce Fuksus', 'Rankname', false, false),
		new Employee(3, 'Matce Fuksus', 'Rankname', true, false),
		new Employee(4, 'Matce Fuksus', 'Rankname', false, true),
	];
}