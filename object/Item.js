var weaponRapiere = new Weapon (
	"Rapière",
	"A slim sword, not very powerful but pretty accurate.",
	150,
	"stats",
	"sword",
	"weakness",
	"strength",
	(user, target) => { return user.name + 'uses' + weaponRapiere.name; }
);
var weaponGoldSword = new Weapon (
	"Gold sword",
	"Une épée en or.",
	400,
	"stats",
	"sword"
);