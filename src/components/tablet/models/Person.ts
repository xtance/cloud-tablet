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
}