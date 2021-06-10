import {Component, OnInit, Input} from '@angular/core';
import {PluginsService} from '../../../../plugins.service';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styles: []
})
export class ApexChartComponent implements OnInit {

  @Input() ids;
  @Input() options;

  constructor(private plugins: PluginsService) {
  }

  ngOnInit() {
    let _this = this;
    setTimeout(() => {
      _this.plugins.apexChart(_this.ids, _this.options);
    }, 500);
  }

}
