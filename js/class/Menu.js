class Menu {
	constructor(name, disposition, location, cursorLocation) {
		this.name = name;
		this.disposition = disposition;
		this.location = location;
		this.cursorLocation = cursorLocation;
	}

	selectLocation() {
		return "code à réaliser pour tout menu";
	}
	applyDisposition() {
		return this.disposition();
	}
}