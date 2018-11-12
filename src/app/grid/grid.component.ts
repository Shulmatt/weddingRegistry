import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    rsvps: Observable<any[]>;
    rsvp: AngularFirestoreDocument<any>;
    db: AngularFirestore;
    displayedColumns: string[] = ['FirstName', 'LastName', 'Rsvp', 'Dinner'];
    entered: string;

    constructor(db: AngularFirestore) {
        this.db = db;
        this.rsvps = db.collection('rsvps').valueChanges();
    }

    ngOnInit() {
    }

}
