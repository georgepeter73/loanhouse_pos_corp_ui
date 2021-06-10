import { Component, OnInit } from '@angular/core';
import {Auth0Service} from '../../../../services/auth0.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor(public auth0: Auth0Service) { }

  ngOnInit() {
  }

}
