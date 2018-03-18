class Menu {
	constructor(element, cursor, trigger) {
		this.element = element;
		this.cursor = cursor;
		this.trigger = trigger;
	}

	triggerElement() {
		return this.element[this.cursor].trigger();
	}
}