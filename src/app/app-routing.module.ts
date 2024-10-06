import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/HomePageComponent', pathMatch: 'full'
  },
  {
    path:'contact-us',
    component: ContactUsComponent,
  },
  {
    path:'shopping',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component:PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
