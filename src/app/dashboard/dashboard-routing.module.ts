import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {ClientComponent} from './client/client.component';
import {UserComponent} from './user/user.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {CasesComponent} from './cases/cases.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'client', component: ClientComponent },
      { path: 'user', component: UserComponent },
      { path: 'permission', component: PermissionsComponent},
      { path: 'case', component: CasesComponent},

     
  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class DashboardRoutingModule { }
