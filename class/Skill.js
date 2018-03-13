class Skill {
	constructor(name, effect) {
		this.name = name;
		this.effect = effect;
	}

	use(user, target) {
		return this.effect(user, target);
	}
}