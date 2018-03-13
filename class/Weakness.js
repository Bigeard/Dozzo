class Weakness {
	constructor(effect) {
		this.effect = effect;
	}
	effect() {
		return this.effect();
	}
}