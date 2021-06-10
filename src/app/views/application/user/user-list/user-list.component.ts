import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import 'firebase/firestore';
import {ButtonRendererComponent} from '../../../../custom/button-renderer.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  frameworkComponents: any;
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: 'agTextColumnFilter' },
    { headerName: 'Company', field: 'company', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true },
    { headerName: 'Role', field: 'role', sortable: true, filter: true },
    {
      headerName: 'Actions',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.clickUser.bind(this)
      }
    }
  ];

  rowData: Observable<any[]>;

  constructor(private router: Router, firestore: AngularFirestore) {
    this.rowData = firestore.collection('users').valueChanges();
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
  }

  ngOnInit() {
  }

  clickUser(e) {
    if (e.type === 'delete') {
      // this.rowData.doc('sVfIuxUlO4QhEJNKSdCx').delete();
      this.router.navigate(['/user-list']);
    } else {
      this.router.navigate(['/add-user']);
    }
  }
}
