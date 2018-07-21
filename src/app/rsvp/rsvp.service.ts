import { Injectable } from '@angular/core';

@Injectable()
export class RsvpService {

  constructor() { }

    getOptions(): string[] {
        return ['Nothing Selected', 'Yes', 'No'];
    }

    getDinnerOptions(): string[] {
        return ["Chicken", "Beef"];
    }
}
