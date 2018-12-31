import { Injectable } from '@angular/core';
import { RsvpModel } from './rsvp.model';

@Injectable()
export class RsvpService {

  constructor() { }

    getDinnerOptions(): string[] {
        return ["Chicken", "Beef", "Veggie","Kids"];
    }

    getNewRsvpModel(): RsvpModel {

        return new RsvpModel(
            '',
            '',
            false,
            'Chicken',
            this.getDinnerOptions(),
            '',
            '',
            false
        );
    }
}
