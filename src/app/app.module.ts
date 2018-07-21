import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';

import { RsvpService } from './rsvp/rsvp.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
    providers: [
        RsvpService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
