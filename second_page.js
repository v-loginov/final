document.addEventListener('DOMContentLoaded', () => {
	
	document.getElementById('zkh').addEventListener('input', updateCharacterCard);
	document.getElementById('food').addEventListener('input', updateCharacterCard);
	document.getElementById('clothes').addEventListener('input', updateCharacterCard);
	document.getElementById('technic').addEventListener('input', updateCharacterCard);
	document.getElementById('learning').addEventListener('input', updateCharacterCard);
	document.getElementById('entertainment').addEventListener('input', updateCharacterCard);
	document.getElementById('travel').addEventListener('input', updateCharacterCard);
	document.getElementById('transport').addEventListener('input', updateCharacterCard);
	
	function updateCharacterCard() {
		const zkh = document.getElementById('zkh').value;
		const food = document.getElementById('food').value;
		const clothes = document.getElementById('clothes').value;
		const technic = document.getElementById('technic').value;
		const learning = document.getElementById('learning').value;
		const entertainment = document.getElementById('entertainment').value;
		const travel = document.getElementById('travel').value;
		const transport = document.getElementById('transport').value;
		
		var data = google.visualization.arrayToDataTable([
			['Money', 'Money per Month'],
			['ЖКХ', parseInt(zkh)],
			['Продукты', parseInt(food)],
			['Одежда', parseInt(clothes)],
			['Техника', parseInt(technic)],
			['Обучение', parseInt(learning)],
			['Развлечения', parseInt(entertainment)],
			['Путешествия', parseInt(travel)],
			['Транспорт', parseInt(transport)]
		]);
		
		var options = {'title':'Затраты в месяц', 'width':640, 'height':480};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		chart.draw(data, options);
	}

	
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(updateCharacterCard);


});