var createUnit = (name, unitClass, stats, skills, inventory) => {
	return new Unit(name, unitClass, 1, 0, inheritStats(stats, unitClass.stats), inheritStats(stats, unitClass.stats), inheritSkills(skills, unitClass.skills), inventory)
}