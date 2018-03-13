var rapierWeapon = new Weapon (
	"Rapier",
	"A slim sword, not very powerful but pretty accurate.",
	150,
	rapierWeaponStats,
	swordItemType,
	(user, target) => { return user.name + 'uses' + rapierWeapon.name; }
);
var goldSwordWeapon = new Weapon (
	"Gold sword",
	"A golden sword. Really fancy but not very useful...",
	1000,
	goldSwordWeaponStats,
	swordItemType,
	(user, target) => { return user.name + 'uses' + goldSwordWeapon.name; }
);