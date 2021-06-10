import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PluginsService} from '../../../plugins.service';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  authSlideOptions: OwlOptions =  {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  authSlides = [
    {
      id: 1,
      image: './assets/images/login/1.png',
      title: 'Manage your orders',
      description: 'It is a long established fact that a reader will be distracted by the readable content.'
    },
    {
      id: 2,
      image: './assets/images/login/1.png',
      title: 'Manage your orders',
      description: 'It is a long established fact that a reader will be distracted by the readable content.'
    },
    {
      id: 3,
      image: './assets/images/login/1.png',
      title: 'Manage your orders',
      description: 'It is a long established fact that a reader will be distracted by the readable content.'
    },
    {
      id: 4,
      image: './assets/images/login/1.png',
      title: 'Manage your orders',
      description: 'It is a long established fact that a reader will be distracted by the readable content.'
    }
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;

    setTimeout(() => current.plugins.index(), 200);
  }

}
