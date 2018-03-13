class Item {
	constructor(name, description, price, stats) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.stats = stats;
	}
}

class Consumable extends Item {
	constructor(name, description, price, stats, amount, use) {
		super(name, description, price, stats);
		this.amount = amount;
		this.use = use;
	}

	use(user, target) {
		return this.use(user, target);
	}
}

class Weapon extends Item {
	constructor(name, description, price, stats, itemType, use) {
		super(name, description, price, stats);
		this.itemType = itemType;
		this.use = use;
	}

	use(user, target) {
		return this.use(user, target);
	}
}

class Armor extends Item {
	constructor(name, description, price, stats, itemType, bodyPart, equipped, effect) {
		super(name, description, price, stats);
		this.itemType = itemType;
		this.bodyPart = bodyPart;
		this.equipped = equipped;
		this.effect = effect;
	}

	use(user, target) {
		return this.effect(user, target);
	}
}