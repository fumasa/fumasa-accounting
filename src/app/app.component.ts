import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { AppRoutes } from './app.routing';

@Component({
  selector: 'accounting-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  @ViewChild("sidebar") sidebar;

  name = 'Angular 5';
  menu = AppRoutes;

  toggleSidebar() {
    if (this.sidebar.opened)
      this.sidebar.close();
    else
      this.sidebar.open();
  }
}
