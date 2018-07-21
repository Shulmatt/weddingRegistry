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
    rsvp: AngularFirestoreDocument<RsvpModel>;
    db: AngularFirestore;

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
        this.rsvp = this.db.doc<any>('rsvps/' + this.model.FirstName + this.model.LastName);
        this.rsvp.set({
            FirstName: this.model.FirstName,
            LastName: this.model.LastName,
            Rsvp: this.model.Rsvp,
            Dinner: this.model.Dinner
        });
    }
}
