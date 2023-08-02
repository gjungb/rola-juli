import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { LedListComponent } from './led-list/led-list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leds',
    pathMatch: 'full',
  },
  {
    path: 'leds',
    children: [
      {
        path: '',
        component: LedListComponent,
      },
      {
        path: ':index',
        component: DetailComponent,
        canActivate: [
          function (route: ActivatedRouteSnapshot) {
            console.log(route.params);
            const index = Number(route.paramMap.get('index'));
            if (Number.isNaN(index) || index < 0 || index > 7) {
              return false;
            }
            return true;
          },
        ],
      },
    ],
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
