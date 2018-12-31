export class RsvpModel {
    constructor(
        public FirstName: string,
        public LastName: string,
        public Rsvp: boolean,
        public Dinner: string,
        public DinnerOptions: string[],
        public Allergies: string,
        public GuestOf: string,
        public HasGuest: boolean
    ) {}
}
