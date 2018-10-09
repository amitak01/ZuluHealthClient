import { Component, OnInit,TemplateRef  } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import {DataExchangeService} from '../../services/data-exchange.service';
import {UserType,MyClients,Users} from '../../model/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';




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
  addUserForm: FormGroup;
  AssignClientForm:FormGroup;
  CurrentUsers:Users;
  modalRef: BsModalRef;
  deletemodalRef: BsModalRef;
  assignmodalRef: BsModalRef;
  IsEditUsers:boolean=false;
  cols: any[];
  UserTypes:any[];
  ClientNames:any[];
  filteredClientSingle: any[];
  Clientstype: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];


  public mask = ['+', '9', '3', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private DEService:DataExchangeService, private fb:FormBuilder,
    private modalService: BsModalService,private toastr: ToastrService,) { 
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

 this.addUserForm=fb.group({
  FirstName:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  LastName:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  Email:[null,Validators.compose([Validators.required, Validators.email])],
  UserType:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  PhoneNo:[null,Validators.required],
});

 this.AssignClientForm=fb.group({
  selectedItems:[null,Validators.required]
  })
  }

  ngOnInit() {
debugger;

    this.users = [
      { FirstName: 'Rhonda', LastName: 'Riose', Email: 'apple1@yopmail.com', PhoneNumber: '546456406.00',
     UserType:'Manager',Clients:'' },
      { FirstName: 'George', LastName: 'Niwu', Email: 'apple2@yopmail.com', PhoneNumber: '5456406.00',
     UserType:'Biller',Clients:'' },   
    
      { FirstName: 'Kewin', LastName: 'Kenchusky', Email: 'apple3@yopmail.com', PhoneNumber: '5456406.00',
      UserType:'Coder',Clients:'' },
      { FirstName: 'Miless', LastName: 'Frowen', Email: 'apple4@yopmail.com', PhoneNumber: '5456406.00',
      UserType:'Client',Clients:'' },
      { FirstName: 'Roase', LastName: 'Nister', Email: 'apple5@yopmail.com', PhoneNumber: '5456406.00',
      UserType:'Collector',Clients:'' },
      { FirstName: 'Jille', LastName: 'Growic', Email: 'apple6@yopmail.com', PhoneNumber: '5456406.00',
      UserType:'Supervisor',Clients:'' },
      { FirstName: 'Leno', LastName: 'Junus', Email: 'apple7@yopmail.com', PhoneNumber: '5456406.00',
      UserType:'Manager',Clients:'Acme,Simpsons' }
        ]
  
  // multiselect

   this.dropdownList = [
      { item_id: 1, item_text: 'Acme' },
      { item_id: 2, item_text: 'Simpsons' },
      { item_id: 3, item_text: 'Soylent Corp' },
      { item_id: 4, item_text: 'Initech' },
      { item_id: 5, item_text: 'Hooli' },
      { item_id: 6, item_text: 'Dynamic' },
      { item_id: 7, item_text: 'Fringe' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Soylent Corp' },
      { item_id: 4, item_text: 'Initech' }
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
    this.cols = [
      { field: 'FirstName', header: 'Name' },
      { field: 'PhoneNumber', header: 'Phone No' },
      { field: 'UserType', header: 'User Type' },
      { field: 'Clients', header: 'Clients' }
  ];
   
  this.UserTypes = [
    { label: 'Biller', value: 'Biller' },
    { label: 'Coder', value: 'Coder' },
    { label: 'Collector', value: 'Collector' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Supervisor', value: 'Supervisor' },
    { label: 'PAS', value: 'PAS' },

   ];

   
   }

  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }

  //Add users

  onFormSubmit(usersData){
  debugger;
  if(this.IsEditUsers==false){
   this.users.push({FirstName:usersData.FirstName,LastName:usersData.LastName,
    Email:usersData.Email,PhoneNumber:usersData.PhoneNo,
    UserType:usersData.UserType.UserTypeName,Clients:""
    });
  this.toastr.success("User Added Successfully !");
  }
  else{
    let currentUser=usersData;
    let usersArray=this.users;
    if(usersData.UserType==null){
      usersData.UserType="Manager";
    }
    this.users.forEach(function (item, index) {
      if (item.Email === currentUser.Email) {
        item.FirstName=usersData.FirstName;
        item.LastName=usersData.LastName;
        item.Email=usersData.Email;
        item.PhoneNumber=usersData.PhoneNo;
        item.UserType=usersData.UserType.UserTypeName;
        item.Clients="";

      }

   });
   this.toastr.success("User Updated Successfully !");
  }
    this.modalRef.hide();
   
  }
  
  OpenDeletePopup(usersData,Deletetemplate: TemplateRef<any>) {
    this.deletemodalRef = this.modalService.show(Deletetemplate);
    this.CurrentUsers=usersData;
  }

  DeleteUsers(){
    debugger;
    var i = 0;
    let usersArray=this.users;
    let currentUser=this.CurrentUsers;
    usersArray.forEach(function (item, index) {
      if (item.Email === currentUser.Email) {
        usersArray.splice(index, 1);
      }
    });
    this.users=usersArray;
    this.toastr.success("User Deleted Successfully !");
    this.deletemodalRef.hide();
   }

   OpenEditPopup(usersData,template: TemplateRef<any>,IsEdit) {
    this.IsEditUsers=true; 
   
    this.modalRef = this.modalService.show(template);
     // input data to form
     this.addUserForm.reset({ user: new Users(), FirstName: usersData.FirstName, LastName: usersData.LastName,
      Email:usersData.Email,PhoneNo:usersData.PhoneNumber
    });
    }

  // onEditUsers(usersData){
  //   debugger;
  // }

  openModal(template: TemplateRef<any>) {
    this.IsEditUsers=false;
    this.modalRef = this.modalService.show(template);
  }

  openDeleteModal(Deletetemplate: TemplateRef<any>) {
    this.deletemodalRef = this.modalService.show(Deletetemplate);
  }
 
  OpenAssignClientPopup(Assigntemplate: TemplateRef<any>,Users) {
    debugger;
    this.CurrentUsers=Users;
    this.assignmodalRef = this.modalService.show(Assigntemplate);
  }

  AssignClient(clients){
    debugger;
    let count=0;
    let selectedClients="";
    clients.selectedItems.forEach(element => {
      if(count==0){
        selectedClients=element.item_text
      }else{
        selectedClients=selectedClients+', '+ element.item_text
      }
      count=count+1;
     
    });
    let currentUser=this.CurrentUsers;
    let usersArray=this.users;
    usersArray.forEach(function (item, index) {
      if (item.Email === currentUser.Email) {
        // usersArray.splice(index, 1);
        // usersArray.push({FirstName:currentUser.FirstName,LastName:currentUser.LastName,
        //   Address:currentUser.Address,City:currentUser.City,Email:currentUser.Email,PhoneNumber:currentUser.PhoneNumber,
        //   UserType:currentUser.UserType,Clients:selectedClients,State:currentUser.State
        //   });
        item.Clients=selectedClients;
      }
    });
    this.toastr.success("Client Assigned Successfully !");
   this.assignmodalRef.hide();

  }

  
  filterCountrySingle(event) {
    let query = event.query;
   
}



  
}

