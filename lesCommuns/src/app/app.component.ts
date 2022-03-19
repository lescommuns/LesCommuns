import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuListItem } from './components/menu-list-item/menu-list-item.component';
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
      name: 'Accueil, Communs!',
      logo: 'fa fa-home'
    },
    {
      route: 'cosy',
      name: 'Le lieu, Cosy!',
      logo: 'fa fa-map-marker'
    }
  ]
  

  constructor(public sidenavService: SidenavService) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
  
}
