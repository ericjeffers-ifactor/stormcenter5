import {Component} from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core'

@Component({
    selector: 'my-app',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    templateUrl: './app/templates/app.template.html',
    styleUrls: ['./app/styles/app.style.css']
})
export class AppComponent { 
    lat: number = 51.678418;
  lng: number = 7.809007;
}
