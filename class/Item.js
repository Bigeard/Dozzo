class Item {
	constructor(name, description, price, stats) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.stats = stats;
	}
}

class Consumable extends Item {
	constructor(name, description, price, stats, amount, itemType, use) {
		super(name, description, price, stats);
		this.amount = amount;
		this.itemType = itemType;
		this.use = use;
	}

	use(user, target) {
		return this.use(user, target);
	}
}

class Weapon extends Item {
	constructor(name, description, price, stats, itemType, weakness, strength, use) {
		super(name, description, price, stats);
		this.itemType = itemType;
		this.weakness = weakness;
		this.strength = strength;
		this.use = use;
	}

	use(user, target) {
		return this.use(user, target);
	}
}

class Armor extends Item {
	constructor(name, description, price, stats, bodyPart, equipped, effect) {
		super(name, description, price, stats);
		this.bodyPart = bodyPart;
		this.itemType = itemType;
		this.equipped = equipped;
		this.effect = effect;
	}

	use(user, target) {
		return this.effect(user, target);
	}
}