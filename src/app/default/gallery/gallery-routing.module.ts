import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultGalleryComponent } from './default-gallery/default-gallery.component';
import { NgxGalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: NgxGalleryComponent,
    children: [
      {
        path: 'default',
        component: DefaultGalleryComponent,
      },
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: '**', redirectTo: 'default' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxGalleryRoutingModule {
}
