import { VehicleFile } from "./VehicleFile";

export class Vehicle {

	public files?: VehicleFile[];

	constructor(
		public id: number,
		public ownerID: number,
		public name: string,
		public numberPlate: string,
		public status: boolean,
	){}

	static TEST_VEHICLES = [
		new Vehicle(1, 1, 'Porsche Taycan', '34543534', true),
		new Vehicle(3, 2, 'Lamborghini', '345345334', false),
		new Vehicle(3, 4, 'Lada', '344353433', false),
	];

	async fetchFiles(){
		this.files = [
			new VehicleFile(1, 23094328, 'Someone', 'Lieutenant', true, 'IDK', 'Lorem ipsum'),
			new VehicleFile(2, 23094328, 'Someone', 'Lieutenant', false, 'IDK', 'Lorem ipsum'),
			new VehicleFile(3, 23094328, 'Someone', 'Lieutenant', true, 'IDK', 'Lorem ipsum'),
			new VehicleFile(4, 23094328, 'Someone', 'Lieutenant', false, 'IDK', 'Lorem ipsum'),
		];
		return this.files;
	}
}