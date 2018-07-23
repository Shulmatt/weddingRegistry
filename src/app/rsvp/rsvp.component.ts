import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    model: RsvpModel;

    constructor(private rsvpService: RsvpService, db: AngularFirestore, public snackBar: MatSnackBar) {
        this.db = db;
        this.rsvps = db.collection('rsvps').valueChanges();
    }

    ngOnInit() {

        this.model = new RsvpModel(
            '',
            '',
            false,
            'Chicken',
            this.rsvpService.getDinnerOptions()
        );
    }


    onSubmit() {
        this.rsvp = this.db.doc<any>('rsvps/' + this.model.FirstName + this.model.LastName);

        var rsvpChoice: string;
        if (this.model.Rsvp) {
            rsvpChoice = 'Yes';
        } else {
            rsvpChoice = 'No';
            this.model.Dinner = '';
        }

        this.rsvp.set({
            FirstName: this.model.FirstName,
            LastName: this.model.LastName,
            Rsvp: rsvpChoice,
            Dinner: this.model.Dinner
        });

        this.snackBar.open("Submitted! You're good to go.", '', { duration: 1000 });
    }
}
