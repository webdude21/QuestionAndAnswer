import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [AlertComponent, DATEPICKER_DIRECTIVES],
  pipes: []
})
export class Home {
  date: Date = new Date();
  constructor() { }
  ngOnInit() { }
}
