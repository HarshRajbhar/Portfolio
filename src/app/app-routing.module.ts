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
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then((a) => a.WorkModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((a) => a.ContactModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
