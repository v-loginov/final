document.addEventListener('DOMContentLoaded', () => {
    const characterCard = document.getElementById('characterCard');
    const charName = document.getElementById('charName');
    const charGender = document.getElementById('charAvatar');
	const charClass = document.getElementById('charClass');
	const charSkills = document.getElementById('charSkills');
	let charSkillsText = '';

    document.getElementById('name').addEventListener('input', updateCharacterCard);
    document.getElementById('gender').addEventListener('change', updateCharacterCard);
    document.getElementById('strength').addEventListener('input', updateCharacterCard);
    document.getElementById('agility').addEventListener('input', updateCharacterCard);
    document.getElementById('intelligence').addEventListener('input', updateCharacterCard);

    function updateCharacterCard() {
        const name = document.getElementById('name').value || '';
        const gender = document.getElementById('gender').value || '';
		const scorePoints = document.getElementById('scorepoints');
        const strength = document.getElementById('strength').value || '';
        const agility = document.getElementById('agility').value || '';
        const intelligence = document.getElementById('intelligence').value || '';

        charName.textContent = name || '';
        charGender.src = gender === '' ? '' : (gender === 'male' ? 'man.png' : 'woman.png');
		document.getElementById('strength').max = 14 - (parseInt(agility) + parseInt(intelligence));
		document.getElementById('agility').max = 14 - (parseInt(strength) + parseInt(intelligence));
		document.getElementById('intelligence').max = 14 - (parseInt(strength) + parseInt(agility));
		scorePoints.textContent = 14 - (parseInt(strength) + parseInt(agility) + parseInt(intelligence));

		if(scorePoints.textContent === '0') {
			if(strength === agility && strength > intelligence) {
				charClass.textContent = "Рейнджер";
				charSkills.textContent = "Навыки: Стрельба из лука, Скрытность, Средняя броня";
			} else if(strength === intelligence && strength > agility) {
				charClass.textContent = "Паладин";
				charSkills.textContent = "Навыки: Щит, Восстановление, Тяжёлая броня";
			} else if (agility === intelligence && agility > strength) {
				charClass.textContent = "Монах";
				charSkills.textContent = "Навыки: Кулачный бой, Иллюзия, Без брони";
			} else {
				charClass.textContent = getClassCharacter(strength, agility, intelligence);
				charSkills.textContent = charSkillsText;
				}				
		} else {
			charClass.textContent = '';
			charSkills.textContent = '';
		}
    }
	
	function getClassCharacter(strength, agility, intelligence) {
		let classChar = {_strength: strength, _agility: agility, _intelligence: intelligence};
		//console.log(classChar);
		let arrClassChar = Object.entries(classChar);
		let sortedArrClassChar = arrClassChar.sort(([, a], [, b]) => b - a);
		switch (sortedArrClassChar[0][0]) {
		  case "_strength":
			charSkillsText = "Навыки: Ближний бой, Выносливость, Тяжёлая броня";
			return "Воин";
			break;
		  case "_agility":
			charSkillsText = "Навыки: Дальний бой, Взлом, Лёгкая броня";
			return "Вор";
			break;
		  case "_intelligence":
			charSkillsText = "Навыки: Молния, Эрудит, Без брони";
			return "Маг";
			break;
		  default:
			return "";
        }
	}
});