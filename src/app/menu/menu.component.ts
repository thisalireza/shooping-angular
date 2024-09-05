import { Component } from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MdbCollapseModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
