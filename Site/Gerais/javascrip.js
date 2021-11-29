
// função para gerar o gráfico

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Hidráulica',         14.58],
      ['Témica-Outros',       2.3688],
      ['Eólica',              2.3712],
      ['Térmica a Gás/GNL',   2.3016],
      ['Térmica a Biomassa',  1.7088],
      ['Solar Fotovoltáiva',  0.4128],
      ['Térmica Nuclear',     0.2568]
    ]);

    var options = {
      title: 'Gráfico Energia Utilizada',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafico_3d'));
    chart.draw(data, options);
  }


 