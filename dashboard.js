const vocabularyScore = [vocabulary score];
const eyeOfDifferenceScore = [eye of difference score];
const problemSolvingScore = [problem solving score];

const skillsChart = document.getElementById('skills-chart');

Chart.defaults.global.defaultFontFamily = 'Arial, sans-serif';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = '#333';






const data = {
  labels: ['Vocabulary', 'Eye of Difference', 'Problem Solving'],
  datasets: [
    {
      data: [vocabularyScore, eyeOfDifferenceScore, problemSolvingScore],
      backgroundColor: ['#f44336', '#4caf50', '#2196f3'],
      borderWidth: 1,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: 'Soft Skills Scores',
    fontSize: 20,
  },
  legend: {
    position: 'right',
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index];
      },
    },
  },
};

const chart = new Chart(skillsChart, {
  type: 'pie',
  data: data,
  options: options,
});
