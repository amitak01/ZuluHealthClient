

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import {ForgetPasswordComponent} from '../forget-password/forget-password.component'

@NgModule({
  declarations: [LoginComponent,ForgetPasswordComponent],
    imports: [
      LoginRoutingModule,
      CommonModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ModalModule.forRoot()
    ],
    providers: [ 
      HttpClient 
        ]
})
export class LoginModule { 

}
