import { Component, Input, OnInit } from '@angular/core';
import { MenuListItem, NavigationService } from 'src/app/services/navigation.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: MenuListItem[] = [];

  constructor(public sidenavService: SidenavService, public navigationService: NavigationService) { }
  
  ngOnInit(): void {
  }

}
