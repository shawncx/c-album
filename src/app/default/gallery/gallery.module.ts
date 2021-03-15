import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { GalleryModule } from 'ng-gallery';
import { ThemeModule } from '../../@theme/theme.module';
import { DefaultGalleryComponent } from './default-gallery/default-gallery.component';
import { NgxGalleryRoutingModule } from './gallery-routing.module';
import { NgxGalleryComponent } from './gallery.component';
import { LightboxModule } from  'ng-gallery/lightbox';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NgxGalleryRoutingModule,
    GalleryModule,
    LightboxModule
  ],
  declarations: [
    NgxGalleryComponent,
    DefaultGalleryComponent
  ]
})
export class NgxGalleryModule { }
