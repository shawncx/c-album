import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'miscellaneous',
        loadChildren: () => import('./miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule),
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module')
          .then(m => m.NgxGalleryModule),
      },
      { path: '', redirectTo: 'gallery/default', pathMatch: 'full' },
      { path: '**', redirectTo: 'miscellaneous/404' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {
}
