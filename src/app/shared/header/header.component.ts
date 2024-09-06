import {Component, HostListener} from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {SearchComponent} from "../search/search.component";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MdbCollapseModule,
    SearchComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class MenuComponent {

  showingScrollToTop: boolean = false;


  // scroll to top, if onclick button
  scrollToTop():void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

//hide button scroll to top , showing when scroll down
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop:number =  document.documentElement.scrollTop;
    this.showingScrollToTop = scrollTop > 700;
  }

}
