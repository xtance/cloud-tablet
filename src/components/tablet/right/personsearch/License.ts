export enum LicenseStatus {
	NONE,
	ACTIVE,
	WILL_REMOVE,
}

export class License {


	constructor(
		public type: string,
		public status: LicenseStatus,
	){}

	/* This is for the "remove license" menu, we need a fresh copy */
	getCopy(){
		return new License(this.type, this.status);
	}

	toggleStatus(){
		/* Can't change the status of non existing license */
		if (!this.status) return this; 
		this.status = this.status === LicenseStatus.ACTIVE ? LicenseStatus.WILL_REMOVE : LicenseStatus.ACTIVE;
		console.log(`[License] Changed ${this.type} status to ${this.status}`);
		return this;
	}
}