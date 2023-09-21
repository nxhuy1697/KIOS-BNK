import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ToastrModule} from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DashModalComponent } from './pages/dashboard/dash-modal/dash-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { ScreenComponent } from './pages/screen/screen.component';
import { ScreenTvComponent } from './layouts/screen-tv/screen-tv.component';
import { ScreenTvModalComponent } from './layouts/screen-tv/screen-tv-modal/screen-tv-modal.component';
import { TicketComponent } from './layouts/ticket/ticket.component';


@NgModule({
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates: true,
      timeOut: 15000 // 5s
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DashModalComponent,
    ScreenComponent,
    ScreenTvComponent,
    ScreenTvModalComponent,
    TicketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
