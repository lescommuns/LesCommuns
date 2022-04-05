import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavService } from './services/sidenav.service';
import { HomeComponent } from './components/home/home.component';
import { CosyComponent } from './components/cosy/cosy.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { HomeButtonComponent } from './components/home/home-button/home-button.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from './services/navigation.service';
import { PricesComponent } from './components/prices/prices.component';
import { IncludedServicesComponent } from './components/included-services/included-services.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CosyComponent,
    ContactComponent,
    MenuListItemComponent,
    HomeButtonComponent,
    PricesComponent,
    IncludedServicesComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    NgbModule
  ],
  providers: [SidenavService, NavigationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
