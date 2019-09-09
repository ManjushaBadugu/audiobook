import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndianBestSellersComponent } from './indian-best-sellers/indian-best-sellers.component';
import { InternationalBestSellersComponent } from './international-best-sellers/international-best-sellers.component';
import { GreatFirstListenersComponent } from './great-first-listeners/great-first-listeners.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllComponent } from './all/all.component';
import { NewhomeComponent } from './newhome/newhome.component';

const routes: Routes = [
  {path:'',component:NewhomeComponent},
  {
    path:'indianBestSellers',
    component:IndianBestSellersComponent
  },
  {
    path:'internationalBestSellers',
    component:InternationalBestSellersComponent
  },
  {
    path:'greatFirstListens',
    component:GreatFirstListenersComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
