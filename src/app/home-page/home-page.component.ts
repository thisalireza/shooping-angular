import { Component } from '@angular/core';
import {MdbCarouselModule,} from "mdb-angular-ui-kit/carousel";




@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MdbCarouselModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
