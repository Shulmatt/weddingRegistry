import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    navLinks: any[];

    ngOnInit() {
        this.navLinks = [
            { path: 'home', label: 'Home' },
            { path: 'rsvp', label: 'RSVP' }
        ];
    }
}
