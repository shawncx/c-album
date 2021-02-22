import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [
    DefaultRoutingModule,
    ThemeModule,
    NbMenuModule
  ],
  declarations: [
    DefaultComponent,
  ],
})
export class DefaultModule {
}
