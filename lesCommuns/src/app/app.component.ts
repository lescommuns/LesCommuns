import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuListItem } from './services/navigation.service';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'lesCommuns';

  @ViewChild(MatSidenav, {static: false}) sidenav!: MatSidenav;

  navItems: MenuListItem[] = [
    {
      route: '..',
      name: 'Accueil, Communs',
      logo: 'fa fa-home'
    },
    {
      route: 'place',
      name: 'Le lieu, Cosy',
      logo: 'fa fa-map-marker'
    },
    {
      route: 'prices',
      name: 'Les tarifs, Combien?',
      logo: 'fa fa-map-marker'
    },
    {
      route: 'services',
      name: 'Les services, Compris',
      logo: 'fa fa-map-marker'
    },
    {
      route: 'events',
      name: 'Les évènements, cool!',
      logo: 'fa fa-map-marker'
    },
    {
      route: 'contact',
      name: 'contact et Réservations',
      logo: 'fa fa-map-marker'
    },  ]
  

  constructor(public sidenavService: SidenavService) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
  
}
