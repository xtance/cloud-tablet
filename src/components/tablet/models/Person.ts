export class Person {
	
	/* These properties are probably fetched from somewhere or IDK */
	public fractionName: string = 'Police Departament';
	public phoneNumber: string = '+370 616 500';

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public gender: boolean,
		public bornDate: string, /* is it a string? */
		public wantedStatus: boolean,
	){}

	static TEST_PERSONS = [
		new Person(435345345, 'Matce', 'Fuksus', false, '01.01.1999', true),
		new Person(1, 'Matce', 'Fuksusauskas', false, '01.01.1999', false),
		new Person(2, 'Matce', 'Fuksusauskas', false, '01.01.1999', false),
	]
}