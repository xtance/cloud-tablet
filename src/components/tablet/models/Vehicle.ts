export class Vehicle {
	constructor(
		public id: number,
		public ownerID: number,
		public name: string,
		public numberPlate: string,
		public status: boolean,
	){}
}