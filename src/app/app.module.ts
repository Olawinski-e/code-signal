import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../app/components/header/header.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersService } from "src/app/services/users.service";
import { ClickComponent } from './components/click/click.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { BoosterComponent } from './components/booster/booster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    ClickComponent,
    StatistiquesComponent,
    BoosterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
