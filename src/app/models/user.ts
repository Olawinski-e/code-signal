export interface UserI {
  firstname: string;
  lastname: string;
  avatar: string;
  stats: {};
}

export class User implements UserI {
  public firstname = "";
  public lastname = "";
  public avatar = "";
  public stats = {};

  constructor(object: UserI = null) {
    this.firstname = object.firstname;
    this.lastname = object.lastname;
    this.avatar = object.avatar;
    this.stats = object.stats;
  }

  // constructor(a: string = "", b: string = "", c: string = ""){
  //   this.firstname = a;
  //   this.lastname = b;
  //   this.avatar = c
  // }

  // constructor(object: UserI = null){
  //   Object.asign(this, object)
  // }
}
