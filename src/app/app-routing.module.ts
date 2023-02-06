import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        (a) => a.HomePageComponent
      ),
  },
  {
    path: ':frag',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        (a) => a.HomePageComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
