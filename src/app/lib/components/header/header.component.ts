import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wd-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent  {
  @Input() name: string;

  @Output() click = new EventEmitter<any>();

  onClick() {
    if (this.click.emit.length > 0)
      this.click.emit({ type: 'toggle' });
  }
}
