import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'wd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() entries: Routes;

  @Output() click: EventEmitter<any> = new EventEmitter();

  routes: Routes;

  constructor(private router: Router) {
    this.routes = this.router.config;

    // this.routes[2].loadChildren()
  }

  onClick() {
    if (this.click.emit.length > 0)
      this.click.emit({ type: 'toggle' });
  }
}