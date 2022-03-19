import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

export interface MenuListItem {
  route: string;
  name: string;
  logo: string;
}

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.less']
})
export class MenuListItemComponent implements OnInit {

  @Input() item!: MenuListItem;

  constructor(private sidenavService: SidenavService, public router: Router) { }

  ngOnInit(): void {
  }

  onItemSelected(item: MenuListItem) {
    this.router.navigate([item.route]);
    this.sidenavService.close();
  }

}
