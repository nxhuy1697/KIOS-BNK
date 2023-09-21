import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/login/login.component";
import { ScreenTvComponent } from "../screen-tv/screen-tv.component";
import { TicketComponent } from "../ticket/ticket.component";

export const AuthLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "screen-tv", component: ScreenTvComponent },
  { path: "ticket", component: TicketComponent},
];
