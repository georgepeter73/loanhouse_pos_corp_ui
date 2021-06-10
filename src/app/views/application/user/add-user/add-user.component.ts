import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../../../models/user'
import {FirebaseService} from "../../../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent implements OnInit {
  public user: User = new User({image: 'assets/images/user/11.png'});
  constructor(private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
  }
  addUser(form) {
    this.user.name = this.user.fname+' '+this.user.lname;
    this.firebaseService.createUser(this.user)
      .then(
        res => {
          this.router.navigate(['/user-list']);
        }
      );
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.user.image = reader.result;

      reader.readAsDataURL(file);
    }
  }
}
