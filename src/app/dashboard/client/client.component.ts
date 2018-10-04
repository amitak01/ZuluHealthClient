import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component'
import {DataExchangeService} from '../../services/data-exchange.service'
import {Clients} from '../../model/user'
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Clients[];
  addUserForm: FormGroup;
  AssignClientForm:FormGroup;


  constructor(private DEService: DataExchangeService, private fb:FormBuilder) { 
    debugger;
    this.DEService.changeDashBoardMessage(false);

this.addUserForm=fb.group({
  FirstName:[null,Validators.required],
  LastName:[null,Validators.required],
  Email:[null,Validators.required],
  PhoneNumber:[null,Validators.required],
  City:[null,Validators.required],
  UserType:[null,Validators.required],
  State:[null,Validators.required],
  Clients:[null,Validators.required],
  Address1:[null,Validators.required],
  PhoneNo:[null,Validators.required],
});

 this.AssignClientForm=fb.group({
  selectedItems:[null,Validators.required]
  })
  //  this.dashboard.showDashboard=false;
   }
   
  ngOnInit() {
    this.clients = [
      { FirstName: 'Rhonda', LastName: 'Riose', Email: 'apple@yopmail.com', PhoneNumber: '546456406.00',
      Address : 'Street1,NJ1',City:'C1',CompanyName:'CN1',State:'St1' },
      { FirstName: 'George', LastName: 'Niwu', Email: 'apple2@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },   
    
      { FirstName: 'Kewin', LastName: 'Kenchusky', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },
      { FirstName: 'Miless', LastName: 'Frowen', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },
      { FirstName: 'Roase', LastName: 'Nister', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },
      { FirstName: 'Jille', LastName: 'Growic', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },
      { FirstName: 'Leno', LastName: 'Junus', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',CompanyName:'CN2',State:'St2' },
    ];
   
  }

}
