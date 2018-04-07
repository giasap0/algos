
export class Lotto {
	public code: String;
	public expiryDate: Date;
	public ordernum: number;
	public enabled: boolean;

	constructor() {
		this.code = '';
		this.expiryDate = null;
		this.ordernum = -1;
		this.enabled = true;
	}
}
