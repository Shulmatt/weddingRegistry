import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CsvModule } from '@ctrl/ngx-csv';
import { RsvpModel } from '../rsvp/rsvp.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    rsvps: Observable<any[]>;
    rsvpsCount: Observable<any[]>;
    db: AngularFirestore;
    displayedColumns: string[] = ['FirstName', 'LastName', 'Rsvp', 'Dinner', 'Allergies', 'GuestOf', 'Date'];
    entered: string = '';
    yesAmount: number = 0;
    noAmount: number = 0;
    chickenAmount: number = 0;
    beefAmount: number = 0;
    veggieAmount: number = 0;
    data: any[] = new Array<any>();

    constructor(db: AngularFirestore) {
        this.db = db;
        this.rsvps = db.collection('rsvps').valueChanges();
        this.rsvpsCount = db.collection('rsvps').valueChanges();
        let _this = this;
        this.rsvpsCount.forEach(function(row) {
            row.forEach(function(a,b,c) {
                if (a.Rsvp == 'Yes') {
                    _this.yesAmount = _this.yesAmount + 1;
                }
                if (a.Rsvp == 'No'){
                    _this.noAmount = _this.noAmount + 1;
                }
                if (a.Dinner == 'Beef') {
                    _this.beefAmount = _this.beefAmount + 1;
                }
                if (a.Dinner == 'Chicken') {
                    _this.chickenAmount = _this.chickenAmount + 1;
                }
                if (a.Dinner == 'Veggie') {
                    _this.veggieAmount = _this.veggieAmount + 1;
                }
            });
        });
        this.rsvpsCount.forEach(function(row) {
            row.forEach(function(a,b,c) {
                var row = {
                    FirstName: a.FirstName,
                    LastName: a.LastName,
                    Rsvp: a.Rsvp,
                    Dinner: a.Dinner,
                    Allergies: a.Allergies,
                    GuestOf: a.GuestOf
                }
                _this.data.push(row);
            });
        });
        console.log(this.data);
    }

    ngOnInit() {
    }

    button1() {
        this.entered = this.entered + '1';
    }

    button2() {
        this.entered = this.entered + '2';
    }

    button3() {
        this.entered = this.entered + '3';
    }

    button4() {
        this.entered = this.entered + '4';
    }

    buttonReset() {
        this.entered = '';
    }
}
