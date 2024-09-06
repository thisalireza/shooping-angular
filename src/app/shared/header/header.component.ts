import { Component } from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MdbCollapseModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class MenuComponent {

}
