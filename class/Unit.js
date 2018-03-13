class Unit {
	constructor(name, classUnit, level, experience, baseStat, inGameStat, skill) {
		this.name = name;
		this.classUnit = classUnit;
		this.level = level;
		this.experience = experience;
		this.baseStat = baseStat;
		this.inGameStat = inGameStat;
		this.skill = skill;
	}
	joinClass(classUnit) {
		this.classUnit = classUnit;
		this.baseStat.health += this.classUnit.stats.health;
		this.baseStat.dozzo += this.classUnit.stats.dozzo;
		this.baseStat.might += this.classUnit.stats.might;
		this.baseStat.magic += this.classUnit.stats.magic;
		this.baseStat.defense += this.classUnit.stats.defense;
		this.baseStat.resistance += this.classUnit.stats.resistance;
		this.baseStat.speed += this.classUnit.stats.speed;
		this.baseStat.luck += this.classUnit.stats.luck;
	}
}