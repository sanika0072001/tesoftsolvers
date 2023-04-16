const data = {
	labels: ['eye game', 'word game', 'Problem solving'],
	datasets: [{
		label: 'Accuracy',
		data: [98, 85, 93],
		backgroundColor: '#007bff'
	}]
};

const config = {
	type: 'bar',
	data: data,
	options: {}
};

window.onload = function() {
	var accuracyChart = new Chart(
		document.getElementById('accuracy-chart'),
		config
	);
};
