var inheritStats = (childStats, parentStats) => {
	var childNewStats = new Stats(
		childStats.health,
		childStats.dozzo,
		childStats.might,
		childStats.magic,
		childStats.defense,
		childStats.resistance,
		childStats.speed,
		childStats.luck
	);

	childNewStats.health += parentStats.health;
	childNewStats.dozzo += parentStats.dozzo;
	childNewStats.might += parentStats.might;
	childNewStats.magic += parentStats.magic;
	childNewStats.defense += parentStats.defense;
	childNewStats.resistance += parentStats.resistance;
	childNewStats.speed += parentStats.speed;
	childNewStats.luck += parentStats.luck;
	return childNewStats;
}