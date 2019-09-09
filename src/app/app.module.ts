import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { IndianBestSellersComponent } from './indian-best-sellers/indian-best-sellers.component';
import { InternationalBestSellersComponent } from './international-best-sellers/international-best-sellers.component';
import { GreatFirstListenersComponent } from './great-first-listeners/great-first-listeners.component';
import { BooksService } from './books.service';
import { SecondComponent } from './second/second.component';
import { FourComponent } from './four/four.component';
import { FooterComponent } from './footer/footer.component';
import { SixComponent } from './six/six.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SigninComponent } from './signin/signin.component';
import { FiveComponent } from './five/five.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayBooksComponent,
    IndianBestSellersComponent,
    InternationalBestSellersComponent,
    GreatFirstListenersComponent,
    SecondComponent,
    FourComponent,
    FooterComponent,
    SixComponent,
    ContactusComponent,
    SigninComponent,
    FiveComponent,
    NewhomeComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
