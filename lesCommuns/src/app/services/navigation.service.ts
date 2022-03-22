import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SidenavService } from "./sidenav.service";

export interface MenuListItem {
    route: string;
    name: string;
    logo: string;
  }
  
@Injectable()
export class NavigationService {
    constructor(public router: Router, public sidenavService: SidenavService){
    }
    
    onItemSelected(item: MenuListItem) {
        this.router.navigate([item.route]);
        this.sidenavService.close();
    }

  }