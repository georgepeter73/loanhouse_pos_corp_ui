import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: []
})
export class ErrorPageComponent implements OnInit {

  errorType = '400';

  constructor() { }

  ngOnInit() {

    const url = window.location.href;
    this.errorType = url.substr(url.lastIndexOf('/') + 1);
  }

}
