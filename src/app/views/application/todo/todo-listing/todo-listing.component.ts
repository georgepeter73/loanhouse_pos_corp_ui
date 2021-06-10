import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './todo-listing.component.html',
  styles: []
})
export class TodoListingComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
  }


}
