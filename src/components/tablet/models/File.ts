import { Violation } from "./Violation";

export class File {
	public violations: Violation[]|null = null;
	constructor(
		public id: number,
		public createdDate: number, /* These are milliseconds? */
		public status: boolean,
		public description: string,
	){}

	static TEST_FILES = [
		new File(1, 1667570290554,  false, 'Falsely Accused'),
		new File(2, 1667570290554,  true, 'Running'),
		new File(3, 1667570290554, true, 'Falsely Accused'),
		new File(4, 1667570290554, false, 'Falsely Accused'),
		new File(5, 1667570290554, false, 'Falsely Accused'),
		new File(6, 1667570290554, false, 'Falsely Accused'),
	]

	async fetchViolations(){
		this.violations = Violation.TEST_VIOLATIONS.filter(one => one.fileID === this.id);
		return this.violations;
	}
}