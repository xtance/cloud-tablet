import { Law } from "./Law";

export class Violation {

	public law?: Law;

	constructor(
		public id: number,
		public fileID: number, /* a relationship to the file, which this violation belongs to */
		public lawID: number, /* which law was violated */
		public status: boolean,
		public date: number,
		public description: string,
		public officerName: string,
		public officerRank: string,
	){
		this.law = Law.TEST_LAWS.find(law => law.id === lawID);
	}

	static TEST_VIOLATIONS = [
		new Violation(1, 1, 4, true, 23432423, 'Description', 'Matce Fuksus', 'Lieutenant'),
		new Violation(2, 1, 3, true, 23432423, 'Description', 'Matce Fuksusauskas', 'Lieutenant'),
		new Violation(3, 2, 2, true, 23432423, 'Description', 'Matce Fuksus', 'Lieutenant'),
		new Violation(4, 2, 1, true, 23432423, 'Description', 'Matce Fuksusauskas', 'Lieutenant'),
	];
}