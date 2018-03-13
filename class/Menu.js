class Menu {
	constructor(name, disposition, locations,) {
		this.name = name;
		this.disposition = disposition;
		this.cursorLocation = cursorLocation;
		this.effect = effect;
	}

	use() {
		return this.effect();
	}
}