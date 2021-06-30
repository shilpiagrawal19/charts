//             // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }



Highcharts.chart('container', {

    chart: {
      type: 'column'
    },
  
    title: {
      text: 'Total fruit consumption, grouped by gender'
    },
  
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
  
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Number of fruits'
      }
    },
  
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
  
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
  
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      stack: 'male'
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
      stack: 'male'
    }, {
      name: 'Jane',
      data: [2, 5, 6, 2, 1],
      stack: 'female'
    }, {
      name: 'Janet',
      data: [3, 0, 4, 4, 3],
      stack: 'female'
    }]
  });