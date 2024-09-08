import {Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/homePage/homePage.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

export const routes :Routes =[
  {
    path:'',
    component: HomePageComponent,
  },
  {
    path:'contact-us',
    component: ContactUsComponent,
  }
  ];
