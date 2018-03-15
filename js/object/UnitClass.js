var fighterUnitClass = new UnitClass(
	'Fighter',
	[swordItemType, axeItemType],
	rageSkill,
	fighterUnitClassStats
);

var thiefUnitClass = new UnitClass(
	'Thief',
	[swordItemType, daggerItemType],
	vanishSkill,
	thiefUnitClassStats
);

var mageUnitClass = new UnitClass(
	'Mage',
	[magicItemType],
	incantationSkill,
	mageUnitClassStats
);

var darkMageUnitClass = new UnitClass(
	'Dark Mage',
	[magicItemType, blackMagicItemType],
	disableSkill,
	darkMageUnitClassStats
);

var abominationUnitClass = new UnitClass(
	'Abomination',
	[axeItemType, blackMagicItemType],
	poisoningSkill,
	abominationUnitClassStats
);