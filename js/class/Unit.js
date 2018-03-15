class Unit {
	constructor(name, unitClass, level, experience, baseStat, inGameStat, skill) {
		this.name = name;
		this.unitClass = unitClass;
		this.level = level;
		this.experience = experience;
		this.baseStat = baseStat;
		this.inGameStat = inGameStat;
		this.skill = skill;
	}
	joinClass(unitClass) {
		this.unitClass = unitClass;
		this.baseStat.health += this.unitClass.stats.health;
		this.baseStat.dozzo += this.unitClass.stats.dozzo;
		this.baseStat.might += this.unitClass.stats.might;
		this.baseStat.magic += this.unitClass.stats.magic;
		this.baseStat.defense += this.unitClass.stats.defense;
		this.baseStat.resistance += this.unitClass.stats.resistance;
		this.baseStat.speed += this.unitClass.stats.speed;
		this.baseStat.luck += this.unitClass.stats.luck;
	}
}