$(function () {
  // Navbar
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
  });

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart
  const config = {
    type: 'pie',
    data: data,
    options: {},
  };


  // Line Chart
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const lineData = {
    labels: labels,
    datasets: [{
      label: 'Enrolees',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const lineConfig = {
    type: 'line',
    data: lineData,
    options: {}
  };

  var myChart = new Chart(document.getElementById('pie'), config);
  var myChart = new Chart(document.getElementById('line'), lineConfig);
});
