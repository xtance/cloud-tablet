export class Person {
	constructor(
		public firstName: string,
		public lastName: string,
		public gender: boolean,
		public bornDate: string, /* is it a string? */
		public wantedStatus: boolean,
	){}
}