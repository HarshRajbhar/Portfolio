import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((a) => a.AboutUsModule),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./services/services.module').then((a) => a.ServicesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
