class Menu {
	constructor(name, disposition, cursorLocation) {
		this.name = name;
		this.disposition = disposition;
		this.cursorLocation = cursorLocation;
	}

	selectLocation() {
		return "code à réaliser";
	}
	applyDisposition() {
		return this.disposition();
	}
}