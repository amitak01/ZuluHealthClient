import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import {DataExchangeService} from '../../services/data-exchange.service';
import {UserType,MyClients,Users} from '../../model/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userTypes: UserType[];
  selectedUserType: UserType;
  clients:MyClients[];
  users:Users[];
  //multiselect
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private DEService:DataExchangeService) { 
      this.DEService.changeDashBoardMessage(false);
  }

  ngOnInit() {
   this.userTypes = [
            {UserTypeId: 1, UserTypeName: 'manager'},
            {UserTypeId: 2, UserTypeName: 'supervisor'},
            {UserTypeId: 3, UserTypeName: 'collector'},
            {UserTypeId: 4, UserTypeName: 'biller'},
            {UserTypeId: 5, UserTypeName: 'payment poster'},
            {UserTypeId: 6, UserTypeName: 'client'},
            {UserTypeId: 7, UserTypeName: 'coder'}
     ]


    this.users = [
      { FirstName: 'Rhonda', LastName: 'Riose', Email: 'apple@yopmail.com', PhoneNumber: '546456406.00',
      Address : 'Street1,NJ1',City:'C1',UserType:'Manager',State:'St1' },
      { FirstName: 'George', LastName: 'Niwu', Email: 'apple2@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Biller',State:'St2' },   
    
      { FirstName: 'Kewin', LastName: 'Kenchusky', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Coder',State:'St2' },
      { FirstName: 'Miless', LastName: 'Frowen', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Client',State:'St2' },
      { FirstName: 'Roase', LastName: 'Nister', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Collector',State:'St2' },
      { FirstName: 'Jille', LastName: 'Growic', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Supervisor',State:'St2' },
      { FirstName: 'Leno', LastName: 'Junus', Email: 'apple@yopmail.com', PhoneNumber: '5456406.00',
      Address : 'Street2',City:'C2',UserType:'Manager',State:'St2' }
        ]
  
  // multiselect

     this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   
  }

  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }
  

}

