import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Post } from '../../../../models/post';
@Component({
  selector: 'app-add-social-post',
  templateUrl: './add-social-post.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class AddSocialPostComponent implements OnInit {
  constructor() { }
  @Output() addNewPost = new EventEmitter();

  postData: Post = {
    id: 'null',
    user: { profile: './assets/images/user/01.jpg', name: 'Nik Jon' },
    description: '',
    likes: null,
    time: null,
    isfollow: null,
    isliked: null,
    comments: [],
    images: [],
  };

  ngOnInit() {}
  savePost(newPost: Post) {
    this.addNewPost.emit(newPost);
    this.postData = {
      id: 'null',
      user: { profile: './assets/images/user/01.jpg', name: 'Nik Jon' },
      description: '',
      likes: null,
      time: null,
      isfollow: null,
      isliked: null,
      comments: [],
      images: [],
    };
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // @ts-ignore
          this.postData.images.push(e.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
