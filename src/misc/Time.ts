export class Time {

	static day = 8.64e+7;
	static hour = 3.6e+6;
	static minute = 60000;
	static second = 1000;

	static getHHMM(ms: number | Date){
        const date = new Date(ms);
        return  ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2);
    }

	static getDDMMYYYY(ms: number | Date){
        const date = new Date(ms);
        return  ('0'+date.getDate()).slice(-2) + ":" + ('0'+(date.getMonth()+1)).slice(-2) + ":" + date.getFullYear();
    }
	
	static ms2human(ms: number){

		if (ms <= 0) return '∞';
		let time  = ms;
		let ret = '';

		if (time >= this.day) {
			const days = Math.floor(time / this.day);
			ret += `${days} d `;
			time -= days * this.day;
		}

		if (time >= this.hour){
			const hours = Math.floor(time / this.hour);
			ret += `${hours} h `;
			time -= hours * this.hour;
		}
		
		if (time >= this.minute){
			const minutes = Math.floor(time / this.minute);
			ret += `${minutes} min `;
			time -= minutes * this.minute;
		}
		
		if (time > 0){
			const seconds = Math.floor(time / this.second);
			ret += `${seconds} sec `;
			time -= seconds;
		}
		
		return ret;
	}

}