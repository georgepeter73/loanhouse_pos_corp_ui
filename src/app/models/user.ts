import {UUID} from 'angular2-uuid';

export class User {
  id?: string;
  fname?: string;
  lname?: string;
  address1?: string;
  address2?: string;
  country?:string;
  mobno?: string;
  company?:string;
  altMob?:string;
  pincode?:number;
  username?:string;
  city?:string;
  name?: string;
  email?: string;
  image?: string | ArrayBuffer;
  password?: string;
  age?: string;
  address?: string;
  confirmpassword?:string;
  role?:string;
  fb?:string;
  twitter?:string;
  insta?:string;
  linkedin?:string;
  profile?:string;

  constructor(user) {
    {
      this.id = user.id || UUID.UUID();
      this.name = user.name || '';
      this.email = user.email || '';
      this.image = user.image || 'assets/images/user/01.jpg';
      this.password = user.password || '';
      this.age = user.age || '';
      this.fname = user.fname || '';
      this.lname = user.lname || '';
      this.address1 = user.address1 || '';
      this.address2 = user.address2 || '';
      this.country = user.country || '';
      this.mobno = user.mobno || '';
      this.altMob = user.altMob || '';
      this.pincode = user.pincode || '';
      this.username = user.username || '';
      this.city = user.city || '';
      this.company = user.company || '';
      this.confirmpassword = user.confirmpassword || '';
      this.role = user.role || '';
      this.fb = user.fb || '';
      this.twitter = user.twitter || '';
      this.insta = user.insta || '';
      this.linkedin = user.linkedin || '';
    }
  }
}
