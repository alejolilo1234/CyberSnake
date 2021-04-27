chartIt();

async function chartIt(){
  let data = await getCSV();
  let ctx = document.getElementById('myChart').getContext('2d');
  // console.log(Chart.defaults.color);
  Chart.defaults.color = "#fff";
  
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: data[0],
          datasets: [{
                label: 'Time on page',
                data: data[2],
                // fill: true,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: .5
              },
              {
                label: 'Time on game',
                data: data[1],
                // fill: true,
                backgroundColor: ['rgba(0,0,255, 0.2)'],
                borderColor: ['rgba(0,0,255, 1)',],
                borderWidth: .5
              }]
            },
      options: {
      scales: {
          y: {
              ticks: {
                  callback: function(value, index, values) {
                      return value + ' s';
                  }
              }
          }
      }
  }
  });
}
async function getCSV(){
  let name = [];
  let time = [];
  let timeOnPage = [];
  const response = await fetch("/api");
  let data = await response.json();

  for(let i = 0; i < data.length; i++){
    name.push(data[i].name);
  }
  for(let i = 0; i < data.length; i++){
    time.push(data[i].time);
  }
  for(let i = 0; i < data.length; i++){
    timeOnPage.push((data[i].timeOnPage).toFixed(2));
  }
  return [name,time,timeOnPage];
}