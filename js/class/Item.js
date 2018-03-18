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
}

class Weapon extends Item {
	constructor(name, description, price, stats, use) {
		super(name, description, price, stats);
		this.use = use;
	}
}

class Armor extends Item {
	constructor(name, description, price, stats, piece, effect) {
		super(name, description, price, stats);
		this.piece = piece;
		this.effect = effect;
	}
}