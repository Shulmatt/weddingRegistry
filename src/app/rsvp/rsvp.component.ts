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
    rsvpList: any[];

    constructor(private rsvpService: RsvpService, db: AngularFirestore, public snackBar: MatSnackBar) {
        this.db = db;
        this.rsvps = db.collection('rsvps').valueChanges();
    }

    ngOnInit() {
        this.model = this.rsvpService.getNewRsvpModel();
        this.rsvpList = new Array();
    }

    checkRsvp() {
        if (this.model.HasGuest || this.model.CannotAttend) {
            this.model.HasGuest = false;
            this.model.CannotAttend = false;
        }
    }

    checkRsvpGuest() {
        if (this.model.Rsvp || this.model.CannotAttend) {
            this.model.Rsvp = false;
            this.model.CannotAttend = false;
        }
    }

    checkCannotAttend() {
        if (this.model.Rsvp || this.model.HasGuest) {
            this.model.Rsvp = false;
            this.model.HasGuest = false;
        }
    }

    onSubmit() {
        this.rsvp = this.db.doc<any>('rsvps/' + this.model.FirstName + this.model.LastName);

        var rsvpChoice: string;
        if (this.model.Rsvp || this.model.HasGuest) {
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
            Allergies: this.model.Allergies,
            GuestOf: this.model.GuestOf,
            Date: new Date().toDateString()
        });

        if (this.model.Rsvp || this.model.HasGuest) {
            this.snackBar.open("Submitted! You're good to go.", '', { duration: 5000 });
        } else {
            this.snackBar.open("Submitted, sorry that you cannot make it.", '', { duration: 5000 });
        }

        // display submission
        this.rsvpList.push(this.model);

        // Clear form
        this.model = this.rsvpService.getNewRsvpModel();
    }
}
