class Menu {
	constructor(disposition, location, cursorLocation, use) {
		this.disposition = disposition;
		this.location = location;
		this.cursorLocation = cursorLocation;
		this.use;
	}

	selectLocation() {
		return this.location[cursorLocation].use();
	}
	use() {
		return "";
	}
	applyDisposition() {
		return this.disposition();
	}
}