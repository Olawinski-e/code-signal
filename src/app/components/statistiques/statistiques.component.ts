import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-statistiques",
  templateUrl: "./statistiques.component.html",
  styleUrls: ["./statistiques.component.scss"]
})
export class StatistiquesComponent implements OnInit {
  public user: User = this._usersService.user;

  constructor(private _usersService: UsersService) {}

  ngOnInit() {
    this._usersService.getUser().subscribe((user: User) => {
      console.log(user);
      this.user = user;
    });
  }
}
