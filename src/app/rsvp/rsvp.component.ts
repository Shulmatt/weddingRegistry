import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { RsvpService } from '../rsvp/rsvp.service';

import { RsvpModel } from '../rsvp/rsvp.model';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

    rsvps: Observable<any[]>;
    rsvp: AngularFirestoreDocument<any>;
    db: AngularFirestore;
    displayedColumns: string[] = ['FirstName', 'LastName', 'Rsvp', 'Dinner'];
    dataSource = ELEMENT_DATA;

    constructor(private rsvpService: RsvpService, db: AngularFirestore) {
        this.db = db;
        this.rsvps = db.collection('rsvps').valueChanges();
    }
    ngOnInit() {

        this.model = new RsvpModel(
            '',
            '',
            this.rsvpService.getOptions(),
            'Nothing Selected',
            'Chicken',
            this.rsvpService.getDinnerOptions()
        )
    }

    model: RsvpModel
    submitted = false

    onSubmit() {
        this.submitted = true
        console.log(this.model.FirstName + ' ' + this.model.LastName + ' ' + this.model.Rsvp);

        if (this.model.Rsvp == 'No') {
            this.model.Dinner = '';
        }
        this.rsvp = this.db.doc<any>('rsvps/' + this.model.FirstName + this.model.LastName);
        this.rsvp.set({
            FirstName: this.model.FirstName,
            LastName: this.model.LastName,
            Rsvp: this.model.Rsvp,
            Dinner: this.model.Dinner
        });
    }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
