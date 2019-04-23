import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User, UserI } from "../models/user";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public user: User = null;

  private apiCoucou = "connectedUser";

  constructor(private httpClient: HttpClient) {
    // if (!this.user) {
    //   this.getUser().subscribe();
    // }
  }

  // private httpClient : HttpClient;
  // constructor(){

  // }

  public getUser(): Observable<User> {
    return this.httpClient.get(environment.api + this.apiCoucou).pipe(
      // à ce stade = objet Json
      map((user: UserI) => {
        // nouveau user
        this.user = new User(user);
        return this.user;
      })
      // err() => XX
    );
  }
}
