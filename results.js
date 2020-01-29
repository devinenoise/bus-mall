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

const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: ['blue', 'blue', 'yellow', 'green', 'purple', 'orange', 'red', 'teal', 'darkblue', 'black', 'blue', 'blue', 'yellow', 'green', 'purple', 'orange', 'red', 'teal', 'darkblue', 'black']
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