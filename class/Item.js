class Item {
	constructor(name, description, price, stats) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.stats = stats;
	}
}

class Consumable extends Item {
	constructor(name, description, price, stats, amount, effect) {
		super(name, description, price, stats);
		this.amount = amount;
		this.effect = effect;
	}

	use(user, target) {
		return this.effect(user, target);
	}
}

class Weapon extends Item {
	constructor(name, description, price, stats, weapon, weakness, strength, effect) {
		super(name, description, price, stats);
		this.weapon = weapon;
		this.weakness = weakness;
		this.strength = strength;
		this.effect = effect;
	}

	use(user, target) {
		return this.effect(user, target);
	}
}

class Armor extends Item {
	constructor(name, description, price, stats, bodyPart, equipped) {
		super(name, description, price, stats);
		this.bodyPart = bodyPart;
		this.equipped = equipped;
	}
}