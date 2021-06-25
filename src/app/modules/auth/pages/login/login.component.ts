import {Component, ChangeDetectorRef, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import {AuthService} from '@auth/auth.service';




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
              private ngZone: NgZone) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.signedIn = authState === AuthState.SignedIn;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      if(this.signedIn){
        this.ngZone.run(() => {
          this.router.navigate(["/dashboard"]);
        });
      }else{
        this.router.navigate(["/login"]);
      }
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
