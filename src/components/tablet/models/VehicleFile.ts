export class VehicleFile {
	constructor(
		public id: number,
		public date: number,
		public officerName: string,
		public officerRank: string,
		public status: boolean,
		public title: string,
		public reason: string,
	){}
}