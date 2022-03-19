import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
    private sidenav: MatSidenav | undefined;

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public open(): void {
        this.sidenav?.open();
    }

    public isOpened(): boolean {
        return this.sidenav?.opened || false;
    }

    public close() {
        this.sidenav?.close();
    }

    public toggle(): void {
        this.sidenav?.toggle();
    }
}