import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuListItem, NavigationService } from 'src/app/services/navigation.service';
import { SidenavService } from 'src/app/services/sidenav.service';


@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.less']
})
export class MenuListItemComponent implements OnInit {

  @Input() item!: MenuListItem;

  constructor(public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

}
