import { Component, OnInit } from '@angular/core';
import { RsvpModel } from '../rsvp/rsvp.model';

import { RsvpService } from '../rsvp/rsvp.service';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

    constructor(private rsvpService: RsvpService) {
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
        console.log(this.model.FirstName + ' ' + this.model.LastName + ' ' + this.model.Rsvp)
    }
}
