import type { Law } from "@/stores/laws";

export class File {
	constructor(
		public id: number,
		public date: number, /* These are milliseconds? */
		public officerName: string,
		public officerRank: string,
		public status: boolean,
		public description: string,
		public lawIDs: number[] = [],
	){}
}