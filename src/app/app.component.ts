import { Component } from '@angular/core';
// Initialization for ES Users
import { Collapse, initMDB } from 'mdb-ui-kit';

initMDB({ Collapse });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';
}
