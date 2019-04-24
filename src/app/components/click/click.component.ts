import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-click",
  templateUrl: "./click.component.html",
  styleUrls: ["./click.component.scss"]
})
export class ClickComponent implements OnInit {
  public count: number = 0;

  onClick(event: Event) {
    console.log("Click", event);
    this.count++;
  }
  constructor() {}

  ngOnInit() {}
}
