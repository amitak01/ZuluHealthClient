import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import {DataExchangeService} from '../../services/data-exchange.service';
import {UserType,MyClients,Users} from '../../model/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Permission,UsersPerssion,UserSelectedPerssion} from '../../model/permission';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  userTypes: UserType[];
  selectedUserType: UserType;
  permissions:Permission[];
  Users:Users[];
  UserPermission:UsersPerssion[];
  UsersSelectedPermission: UserSelectedPerssion[];
  

  constructor(private DEService:DataExchangeService, private fb:FormBuilder) { 
      this.DEService.changeDashBoardMessage(false);
      this.userTypes = [
        {UserTypeId: 1, UserTypeName: 'manager'},
        {UserTypeId: 2, UserTypeName: 'supervisor'},
        {UserTypeId: 3, UserTypeName: 'collector'},
        {UserTypeId: 4, UserTypeName: 'biller'},
        {UserTypeId: 5, UserTypeName: 'payment poster'},
        {UserTypeId: 6, UserTypeName: 'client'},
        {UserTypeId: 7, UserTypeName: 'coder'}
 ];

 this.permissions = [
  {PermissionId: 1,Title:'Create New Users'},
  {PermissionId: 2,Title:'Edit Existing Users'},
  {PermissionId: 3,Title:'Reset Password'},
  {PermissionId: 4,Title:'Set User Permissions'},
  {PermissionId: 5,Title:'Set Client Permissions'},
  {PermissionId: 6,Title:'Set Up Client '},
  {PermissionId: 7,Title:'Assign Client to User'}
 ];
  
//  this.UserPermission=[
//   {UserId:1,UserName:'Rhonda'},
//   {UserId:2,UserName:'Kewin'},
//   {UserId:3,UserName:'lino'},
//   {UserId:4,UserName:'jille'}
//  ]
 
  }
  ngOnInit() {

    
 this.UsersSelectedPermission = [
  {UserId:1,PermissionId: 1,Title:'Create New Users',UserType:"Manager"},
  {UserId:1,PermissionId: 2,Title:'Edit Existing Users',UserType:"Manager"},
  {UserId:1,PermissionId: 3,Title:'Reset Password',UserType:"Manager"},
  {UserId:1,PermissionId: 4,Title:'Set User Permissions',UserType:"Manager"},
  {UserId:1,PermissionId: 5,Title:'Set Client Permissions',UserType:"Manager"},
  {UserId:1,PermissionId: 6,Title:'Set Up Client ',UserType:"Biller"},
  {UserId:1,PermissionId: 7,Title:'Assign Client to User',UserType:"Biller"}
 ];
  }

  SavePermission(){
    
  }

}


