class Menu {
	constructor(name, disposition, location, cursorLocation) {
		this.name = name;
		this.disposition = disposition;
		this.location = location;
		this.cursorLocation = cursorLocation;
	}

	selectLocation() {
		return "code à réaliser";
	}
	applyDisposition() {
		return this.disposition();
	}
}