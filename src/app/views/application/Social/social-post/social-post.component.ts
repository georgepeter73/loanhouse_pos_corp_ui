import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SocialPostComponent implements OnInit {
  constructor() { }
  @Input() post;
  postCommentMsg = ''

  gridOptions = {
    urlKey      :     'original_url',
    sortKey     :     'nth',
    isResponsive:     false,
    margin      :     2,
    maxLength   :     7
  };

  ngOnInit() {
  }
  saveComment(postCommentMsg) {
    this.post.comments.push({
      image: './assets/images/user/04.jpg',
      user: { name: 'Sandy S', msg: postCommentMsg, time: new Date() },
      is_commentLike: true
    });
    this.postCommentMsg = '';
  }
  isLiked(postLike) {
    this.post.is_liked = postLike;
    if (postLike) {
      this.post.likes += 1;
    } else {
      this.post.likes -= 1;
    }
  }
  isFollowed(follow) {
    this.post.is_follow = follow;
  }
  isLikedComment(index, like) {
    // console.log(index);
    this.post.comments[index].is_commentLike = like;
  }
}
