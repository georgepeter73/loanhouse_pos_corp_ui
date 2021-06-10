import {Component, Input, OnInit} from '@angular/core';
import {PluginsService} from '../../../../plugins.service';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styles: []
})
export class HighChartComponent implements OnInit {
  constructor(private plugins: PluginsService) {}
  @Input() ids;
  @Input() options: any;
  ngOnInit() {
    setTimeout(() => {
      if(this.ids !== undefined){
        Highcharts.chart(this.ids, this.options);
      }
    }, 500);
   }
}
