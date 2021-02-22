import { Component } from '@angular/core';

@Component({
  selector: 'ngx-default-footer',
  styleUrls: ['./default-footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="#" target="_blank">xichen</a></b> 2021
    </span>
  `,
})
export class DefaultFooterComponent {
}
