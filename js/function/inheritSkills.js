var inheritSkills = (childSkills, parentSkills) => {
	var childNewSkillList = new SkillList(childSkills.limit, childSkills.skill);

	parentSkills.skill.forEach( element => {
		pushObjectInArray(element, childNewSkillList.skill);
	});
	return childNewSkillList;
}