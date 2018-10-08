import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  Output,
  EventEmitter, TemplateRef
} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserLogin } from '../model/user';
import { AuthenticationService } from '../services/authentication.service';
import { AppSettingsService } from '../services/app-settings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {DataExchangeService} from '../services/data-exchange.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() checkToken: EventEmitter<any> = new EventEmitter<any>();
  licenceForm: FormGroup;
  loginForm: FormGroup;
  returnUrl: string;
  messages: any = [];
  userRolesArr: any [];
  userRoles: any;
  userPermission: any [];
  modalLicense: BsModalRef;
     config = {
  animated: true,
  keyboard: true,
  backdrop: true,
  ignoreBackdropClick: false
};


  constructor(private toastr: ToastrService, private fb: FormBuilder, private DEServices:DataExchangeService,
              private router: Router,private appSettings: AppSettingsService, 
              private authenticationService: AuthenticationService,private route: ActivatedRoute, 
              private modalService: BsModalService) { 

                this.loginForm=fb.group({
                  Username:[null,Validators.required],
                  Password:[null,Validators.required]
                })
              }

  ngOnInit() { }

  onFormSubmit(logindata){
    debugger;
   this.appSettings.Login(logindata).subscribe(
     data=>{
        let test=data;
        if(data.result==true){
          this.toastr.success('Login Successfully');
          this.DEServices.changeDashBoardMessage(true);
 
          this.router.navigate(['/dashboard']);
        }
        else{
          this.toastr.error("error !")
        }
     }
   )

  }

  

}
