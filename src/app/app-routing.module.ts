import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from 'projects/app1/src/app/view1/view1.component';
import { View2Component } from 'projects/app1/src/app/view2/view2.component';

const routes: Routes = [
  {path: 'app1', 
  loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'},
 {path: 'app2', 
  loadChildren: '../../projects/app2/src/app/app.module#App2SharedModule'},
//  { path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
