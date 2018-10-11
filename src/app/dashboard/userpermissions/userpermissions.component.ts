import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import {DataExchangeService} from '../../services/data-exchange.service';
import {UserType,MyClients,Users} from '../../model/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Permission,UsersPerssion,UserSelectedPerssion} from '../../model/permission';
import { LocalStorage } from '@ng-idle/core';

@Component({
  selector: 'app-userpermissions',
  templateUrl: './userpermissions.component.html',
  styleUrls: ['./userpermissions.component.css']
})
export class UserpermissionsComponent implements OnInit {


  userTypes: UserType[];
  selectedUserType: UserType;
  permissions:Permission[];
  Users:Users[];
  UserPermission:UsersPerssion[];
  UsersSelectedPermission: UserSelectedPerssion[];
  
  SelectedUser:string;
  constructor(private DEService:DataExchangeService, private fb:FormBuilder)  { 
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
{PermissionId: 7,Title:'Add Correction For Billing'},
{PermissionId: 8,Title:'Close Correction for Billing '},
{PermissionId: 9,Title:'Edit Correction For Billing'},
{PermissionId: 10,Title:'Management Resolution for Billing '},
{PermissionId: 11,Title:'Update Correction Status for Billing'},
{PermissionId: 12,Title:'Enter Coding into ZuluFlow '},
{PermissionId: 13,Title:'Edit Coding into ZuluFlow'},
{PermissionId: 14,Title:'Add Claim Issue'},
{PermissionId: 15,Title:'Edit Claim Issue'},
{PermissionId: 16,Title:'Add Comment to Claim Issue'},
{PermissionId: 17,Title:'Close Claim Issue'},
{PermissionId: 18,Title:'Open Claim Issue'},
{PermissionId: 19,Title:'Add Missing Remit Issue'},
{PermissionId: 20,Title:'Edit Missing Remit Issue'},
{PermissionId: 21,Title:'Override Missing Remit Issue'},
{PermissionId: 22,Title:'Open Missing Remit Issue'},
{PermissionId: 23,Title:'Close Missing Remit Issue'}

];

//  this.UserPermission=[
//   {UserId:1,UserName:'Rhonda'},
//   {UserId:2,UserName:'Kewin'},
//   {UserId:3,UserName:'lino'},
//   {UserId:4,UserName:'jille'}
//  ]


  }

  ngOnInit() {
    this.SelectedUser=localStorage.getItem("AdminSelectedUser"); 
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

  SavePermission(data){
    
  }

}
