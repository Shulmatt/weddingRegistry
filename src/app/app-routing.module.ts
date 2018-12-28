import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GridComponent } from './grid/grid.component';
import { RegistryComponent } from './registry/registry.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'rsvp', component: RsvpComponent },
    { path: 'grid', component: GridComponent },
    { path: 'registry', component: RegistryComponent },
    { path: 'hotel', component: HotelComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
