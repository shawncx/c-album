import { Component } from '@angular/core';

import { MENU_ITEMS } from './default-menu';

@Component({
  selector: 'ngx-default',
  styleUrls: ['default.component.scss'],
  template: `
    <ngx-default-column-layout>
      <router-outlet></router-outlet>
    </ngx-default-column-layout>
  `,
})
export class DefaultComponent {

}
