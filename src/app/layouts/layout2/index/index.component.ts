import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../../plugins.service';

import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(private plugins: PluginsService,@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // Init all plugins...
    const current = this;

    setTimeout(() => {
      current.plugins.index();
    }, 200);
    this.document.body.classList.add('sidebar-main-active');
    this.document.body.classList.add('right-column-fixed');
    this.document.body.classList.add('right-column-fixed');
  }

}
