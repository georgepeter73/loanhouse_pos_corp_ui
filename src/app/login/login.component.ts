import {Component, ChangeDetectorRef, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {PluginsService} from '../plugins.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  signedIn: boolean;

  constructor(private ref: ChangeDetectorRef,
              private router: Router,
              private auth: AuthService,
              private ngZone: NgZone,
              private plugins: PluginsService) {}
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


  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.signedIn = authState === AuthState.SignedIn;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      if(this.signedIn){
        this.ngZone.run(() => {
          this.router.navigate(["/"]);
        });
      }
    });
    // Init all plugins...
    const current = this;

    setTimeout(() => current.plugins.index(), 200);




  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }


}
