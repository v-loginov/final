document.addEventListener('DOMContentLoaded', () => {
	
	document.getElementById('zkh').addEventListener('input', updateCharacterCard);
	document.getElementById('food').addEventListener('input', updateCharacterCard);
	document.getElementById('clothes').addEventListener('input', updateCharacterCard);
	document.getElementById('technic').addEventListener('input', updateCharacterCard);
	document.getElementById('learning').addEventListener('input', updateCharacterCard);
	document.getElementById('entertainment').addEventListener('input', updateCharacterCard);
	document.getElementById('travel').addEventListener('input', updateCharacterCard);
	document.getElementById('transport').addEventListener('input', updateCharacterCard);
	document.getElementById('saveButton').addEventListener('click', saveToTable);
	
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
		
		var options = {'title':'Затраты в месяц', 'width':500, 'height':250};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		chart.draw(data, options);
	}

	function saveToTable(){
		const dataTable = document.getElementById('dataTable');
		const newRow = document.createElement('tr');
        newRow.innerHTML += '<td>' + document.getElementById('zkh').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('food').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('clothes').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('technic').value + '</td>';
		newRow.innerHTML += '<td>' + document.getElementById('learning').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('entertainment').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('travel').value + '</td>';
        newRow.innerHTML += '<td>' + document.getElementById('transport').value + '</td>';

        dataTable.appendChild(newRow);
	}

	
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(updateCharacterCard);


});