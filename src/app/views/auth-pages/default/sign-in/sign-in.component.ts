import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Auth0Service} from '../../../../services/auth0.service';
import {AuthState, CognitoUserInterface, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  signedIn: boolean;

  constructor(private ref: ChangeDetectorRef,
              private router: Router,
              private auth: AuthService,
              private ngZone: NgZone) {}

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




  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
