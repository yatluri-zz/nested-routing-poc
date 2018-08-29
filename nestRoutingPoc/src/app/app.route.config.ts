import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import * as Parent from './parent-route/index';
import * as FirstComponent from './first-parent-route/index';
const appRoute: Routes = [
  {
    path: 'ParentRoute',
    component: Parent.ParentRouteComponent,
    children: [
      { path: '1', component: Parent.FirstChildComponent },
      { path: '2', component: Parent.SecondChildComponent },
      { path: '3', component: Parent.ThirdChildComponent },
      { path: '**', redirectTo: '1' }
    ]
  },
  {
    path: 'firstRoute',
    component: FirstComponent.FirstParentRouteComponent
  },
  {
    path: '**',
    redirectTo: 'firstRoute'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoute, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteConfig {}
