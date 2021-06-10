import {Component, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard1.component.html',
  styleUrls: []

})
export class Dashboard1Component implements OnInit {
  constructor(private zone: NgZone) {}
  public column1 = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors: ['#f687ac', '#6be6f4'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    yaxis: {},
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter(val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
  public donut1 = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut'
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'donut'
    },
    legend: {
      formatter(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  public line1 = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Desktops',
      data: [5, 10, 8, 15]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    }
  };
  public amchart = function(element) {
    const chart = am4core.create(element, am4charts.XYChart);
    chart.colors.list = [am4core.color('#827af3')];
    const chartdata = [];
    let value = 120;

    const names = ['ra',
      'De',
      'Ca',
      'Ja',
      'Ri',
      'An'
    ];

    for (let i = 0; i < names.length; i++) {
      value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      chartdata.push({ category: names[i], value });
    }

    chart.data = chartdata;
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = '1,3';
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.location = 0.5;

    categoryAxis.renderer.labels.template.adapter.add('dx', function(dx, target) {
      return -target.maxRight / 2;
    });

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'category';
    series.dataFields.valueY = 'value';
    series.tooltipText = '{valueY.value}';
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = 'horizontal';

    series.bullets.create(am4charts.CircleBullet);
    chart.cursor = new am4charts.XYCursor();

  };
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.amchart('amchart');
    });
  }
}
