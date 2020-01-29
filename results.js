const results = JSON.parse(localStorage.getItem('votes'));

//document.getElementById('results').textContent = JSON.stringify(results, 0, 2);
// make an empty array for the chart
const data = [];
const labels = [];

// push the vote results into the array from the JSON
results.forEach(item => {
    data.push(item.votes);
    labels.push(item.id);
});

Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontFamily = 'sans-serif';

const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: ['#A4B8BF', '#D9C6BF', '#D9A5A0', '#BF8A8A', 'white', '#A4B8BF', '#D9C6BF', '#D9A5A0', '#BF8A8A', 'white', '#A4B8BF', '#D9C6BF', '#D9A5A0', '#BF8A8A', 'white', '#A4B8BF', '#D9C6BF', '#D9A5A0', '#BF8A8A', 'white'],
        }]
    },
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