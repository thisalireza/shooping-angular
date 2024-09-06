import { Component } from '@angular/core';
import {MdbCarouselModule,} from "mdb-angular-ui-kit/carousel";
import {ProductListComponent} from "../product-list/product-list.component";
import {QuestionAnswerComponent} from "../question-answer/question-answer.component";
import {ArticleComponent} from "../article/article.component";




@Component({
  selector: 'app-homePage',
  standalone: true,
  imports: [
    MdbCarouselModule,
    ProductListComponent,
    QuestionAnswerComponent,
    ArticleComponent
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss'
})
export class HomePageComponent {

}
