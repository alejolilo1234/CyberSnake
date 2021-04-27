// document.addEventListener("DOMContentLoaded",()=>{


chartItScore();

async function chartItScore(){
  let data = await getScores();
  let ctx = document.getElementById('myChartScores').getContext('2d');
  Chart.defaults.color = "#fff";
  
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data[0],
          datasets: [{
                label: 'Scores',
                data: data[1],
                fill: true,
                backgroundColor: ['rgba(0, 255, 0, 0.2)'],
                borderColor: ['rgba(0, 255, 0, 1)',],
                borderWidth: .5
              }]
            },
      options: {
      scales: {
          y: {
              ticks: {
                  callback: function(value, index, values) {
                      return value + ' p';
                  }
              }
          }
      }
  }
  });
}
async function getScores(){
  let name = [];
  let score = [];
  const response = await fetch("/api");
  let data = await response.json();

  for(let i = 0; i < data.length; i++){
    name.push(data[i].name);
  }
  for(let i = 0; i < data.length; i++){
    score.push(data[i].score);
  }
  return [name,score];
}


// });