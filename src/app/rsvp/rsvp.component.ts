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
        this.model = this.rsvpService.getNewRsvpModel();
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
            Dinner: this.model.Dinner,
            Allergies: this.model.Allergies
        });

        if (this.model.Rsvp) {
            this.snackBar.open("Submitted! You're good to go.", '', { duration: 5000 });
        } else {
            this.snackBar.open("Submitted, sorry that you cannot make it.", '', { duration: 5000 });
        }

        // Clear form
        this.model = this.rsvpService.getNewRsvpModel();
        
    }
}
