import {Component, NgZone, OnInit, ViewEncapsulation} from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class Dashboard2Component implements OnInit {
  constructor(private wowService: NgwWowService, private zone: NgZone) {
    this.wowService.init();
  }
  data = [];
  statusClass = 'primary';

  selectedDate = '2017-01-01';
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30',
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15',
        slidesToShow: 1
      }
    }],
    nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
    prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>',
  };

  public serverData = [
    {
      id: '0879985',
      since_date: '26/12/2019',
      reboot_date:  '30/12/2019',
      status: 'Running',
      location: 'Victoria 8007 Australia',
      progress: 90
    },
    {
      id: '00879984',
      since_date: '23/12/2019',
      reboot_date:  '27/12/2019',
      status: 'Starting',
      location: 'Athens 2745 Greece',
      progress: 70
    },
    {
      id: '00879983',
      since_date: '18/12/2019',
      reboot_date:  '21/12/2019',
      status: 'Stopped',
      location: 'Victoria 8007 Australia',
      progress: 48
    },
    {
      id: '00879982',
      since_date: '26/12/2019',
      reboot_date:  '30/12/2019',
      status: 'Maintenance',
      location: 'Victoria 8007 Australia',
      progress: 70
    }
  ];


  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  public chart1 = function(element) {
    const chart = am4core.create(element, am4charts.XYChart);
    chart.colors.list = [am4core.color('#6ce6f4')];

    chart.colors.list = [am4core.color('#827af3'), am4core.color('#6ce6f4')];
    const data = [];
    let open = 85;
    let close = 120;
    const names = ['Rai', 'Dem', 'Caro', 'Jac', 'Rich', 'Ano', 'Amd', 'Idal', 'Joi', 'Mar', 'Cur', 'Shl', 'Meg'];

    for (let i = 0; i < names.length; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      close = open + Math.round(Math.random() * 10) + 3;
      data.push({ category: names[i], open, close });
    }

    chart.data = data;
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = '1,3';
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = 'left';
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.inside = true;

    categoryAxis.renderer.labels.template.adapter.add('dx', function(dx, target) {
      return -target.maxRight / 2;
    });

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'category';
    series.dataFields.openValueY = 'open';
    series.dataFields.valueY = 'close';
    series.tooltipText = 'open: {openValueY.value} close: {valueY.value}';
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = 'horizontal';
    const openBullet = series.bullets.push(new am4charts.CircleBullet());
    openBullet.locationY = 1;
    const closeBullet = series.bullets.create(am4charts.CircleBullet);
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
  };

  public getServerStatus($msg) {
    $msg = $msg.toLowerCase();
    if ($msg === 'starting') {
      this.statusClass = 'warning';
    } else if ($msg === 'stopped') {
      this.statusClass = 'danger';
    } else if ($msg === 'maintenance') {
      this.statusClass = 'primary';
    } else {
      this.statusClass = 'success';
    }
    return  this.statusClass;
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.chart1('chart');
    });
  }

}
