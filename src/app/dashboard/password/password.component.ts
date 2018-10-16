import { Component, OnInit,Input } from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  @Input() NewPassword = '';
  public account = {
    password: <string>null
};

public barLabel: string = "Password strength:";
public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  constructor(private DEService:DataExchangeService, private fb: FormBuilder,) { 
    this.DEService.changeDashBoardMessage(false);
    this.changePasswordForm = fb.group({
      'CurrentPassword': [null, Validators.required],
      'NewPassword': [null, Validators.required],
      'ConfirmPassword': [null, Validators.required],
    })
  }

  ngOnInit() {
   
// {validator: this.checkIfMatchingPasswords('NewPassword', 'ConfirmPassword')}

  }

}
