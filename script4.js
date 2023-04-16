// Scrabble Word Game Accuracy data
const scrabbleData = {
  labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5', 'Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'],
  datasets: [{
    label: 'Accuracy (%)',
    data: [80, 85, 90, 75, 70, 85, 90, 95, 80, 85],
    backgroundColor: '#4286f4',
    borderColor: '#4286f4',
    borderWidth: 1
  }]
};

// Difference in Picture Game Accuracy data
const differenceData = {
  labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5', 'Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'],
  datasets: [{
    label: 'Accuracy (%)',
    data: [70, 75, 80, 85, 90, 95, 80, 85, 90, 95],
    backgroundColor: '#f44141',
    borderColor: '#f44141',
    borderWidth: 1
  }]
};

// Scrabble Word Game Accuracy chart
const scrabbleChart = document.getElementById('scrabble-chart').getContext('2d');
new Chart(scrabbleChart, {
  type: 'line',
  data: scrabbleData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Difference in Picture Game Accuracy chart
const differenceChart = document.getElementById('difference-chart').getContext('2d');
new Chart(differenceChart, {
  type: 'line',
  data: differenceData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
