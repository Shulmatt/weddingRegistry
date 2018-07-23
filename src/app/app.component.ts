import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    navLinks: any[];
    isDarkTheme: Observable<boolean>;

    constructor(private themeService: ThemeService) {}

    ngOnInit() {
        this.navLinks = [
            { path: 'home', label: 'Home' },
            { path: 'rsvp', label: 'RSVP' },
            { path: 'grid', label: 'Guest List' }
        ];

        this.isDarkTheme = this.themeService.isDarkTheme;
    }

    toggleTheme(checked: boolean) {
        this.themeService.setDarkTheme(checked);
    }
}
