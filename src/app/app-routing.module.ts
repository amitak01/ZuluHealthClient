import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordComponent} from './forget-password/forget-password.component'



const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule' },
  {path:'forgetPassword',component:ForgetPasswordComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true,onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
