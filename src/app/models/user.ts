export interface UserI {
  firstname: string;
  lastname: string;
  avatar: string;
  level: number;
  xp: number;
}

export class User implements UserI {
  public firstname = "";
  public lastname = "";
  public avatar = "";
  public level = 0;
  public xp = 0;

  constructor(object: UserI = null) {
    this.firstname = object.firstname;
    this.lastname = object.lastname;
    this.avatar = object.avatar;
    this.level = object.level;
    this.xp = object.xp;
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
