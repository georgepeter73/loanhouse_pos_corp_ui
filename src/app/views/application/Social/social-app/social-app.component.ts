import {Component, NgModule, OnInit, ViewEncapsulation} from '@angular/core';
import { Posts } from '../../../../fake-api/api/SocialPost.js';
@Component({
  selector: 'app-social-app',
  templateUrl: './social-app.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})

export class SocialAppComponent implements OnInit {

  public socialPosts = Posts;
  constructor() { }

  ngOnInit() {
  }

  addPost(postItem) {
    this.socialPosts.unshift(postItem);
    console.log(this.socialPosts);
  }
}
