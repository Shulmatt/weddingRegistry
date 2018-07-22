import { Injectable } from '@angular/core';

@Injectable()
export class RsvpService {

  constructor() { }

    getDinnerOptions(): string[] {
        return ["Chicken", "Beef", "Veggie"];
    }
}
