import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        // Remove Script - Issue with Zola's 3rd party JS
        !function(a){ if (a.getElementById('zola-wjs')) {a.getElementById('zola-wjs').remove();}}(document);

        // Initialize 3rd party Zola JS
        !function(e,t,n){ var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");
    }

}
