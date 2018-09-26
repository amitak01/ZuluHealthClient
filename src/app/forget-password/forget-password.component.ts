import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AppSettingsService} from '../services/app-settings.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm: FormGroup;


  constructor(private authService: AuthenticationService, private appSettingService: AppSettingsService,private formBuilder: FormBuilder,private toasterService:ToastrService,private route:Router) {
    this.forgetForm=formBuilder.group({
      Username:[null,Validators.required]
    });
   }

  ngOnInit() {
  }
  OnPasswordChage(data){
debugger;
  this.appSettingService.ForgetPassword(data).subscribe(
    data=>{
   if(data.result==true){
   this.toasterService.success("Email sent successfully !");
   this.route.navigate(['/login']);
   }
  })

  }

}
