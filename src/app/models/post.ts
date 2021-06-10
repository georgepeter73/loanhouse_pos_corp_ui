
export class Post {
   id: string;
   description: string;
   user: object;
   likes: number;
   time: Date;
   isfollow: boolean;
   isliked: boolean;
   comments: [];
   images?: [];
}
