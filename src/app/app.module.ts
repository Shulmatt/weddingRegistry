// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';

// Services
import { RsvpService } from './rsvp/rsvp.service';

// Other
import { environment } from '../environments/environment';
import { GridComponent } from './grid/grid.component';
import { RegistryComponent } from './registry/registry.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpComponent,
    GridComponent,
    RegistryComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      MatTableModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatRadioModule,
      MatInputModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatToolbarModule,
      MatCardModule,
      MatSlideToggleModule,
      MatButtonModule,
      MatSnackBarModule,
      ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
    providers: [
        RsvpService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
