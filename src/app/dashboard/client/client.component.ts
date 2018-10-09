import { Component, OnInit,TemplateRef } from '@angular/core';
import {DashboardComponent} from '../dashboard.component'
import {DataExchangeService} from '../../services/data-exchange.service'
import {Clients} from '../../model/user'
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Clients[];
  addUserForm: FormGroup;
  AssignClientForm:FormGroup;
  cols: any[];
  modalRef: BsModalRef;
  deletemodalRef: BsModalRef;
  IsEditUsers:boolean=false;
  CurrentUsers:Clients;
  CompanyNames:any[];
  public mask = ['+', '9', '3', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(private DEService: DataExchangeService,private toastr: ToastrService, private fb:FormBuilder,private modalService: BsModalService,) { 
    debugger;
    this.DEService.changeDashBoardMessage(false);

this.addUserForm=fb.group({
  FirstName:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  LastName:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  Email:[null,Validators.compose([Validators.required, Validators.email])],
  CompanyName:[null,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
  PhoneNo:[null,Validators.required],
});

 this.AssignClientForm=fb.group({
  selectedItems:[null,Validators.required]
  })
  //  this.dashboard.showDashboard=false;
   }
   
  ngOnInit() {
    this.clients = [
      { FirstName: 'Rhonda', LastName: 'Riose', Email: 'apple1@yopmail.com', PhoneNumber: '546456406.00',
      CompanyName:'CN1'},
      { FirstName: 'George', LastName: 'Niwu', Email: 'apple2@yopmail.com', PhoneNumber: '5456406.00',
      CompanyName:'CN2' },   
    
      { FirstName: 'Kewin', LastName: 'Kenchusky', Email: 'apple3@yopmail.com', PhoneNumber: '5456406.00',
     CompanyName:'CN2' },
      { FirstName: 'Miless', LastName: 'Frowen', Email: 'apple4@yopmail.com', PhoneNumber: '5456406.00',
      CompanyName:'CN2' },
      { FirstName: 'Roase', LastName: 'Nister', Email: 'apple5@yopmail.com', PhoneNumber: '5456406.00',
       CompanyName:'CN2' },
      { FirstName: 'Jille', LastName: 'Growic', Email: 'apple6@yopmail.com', PhoneNumber: '5456406.00',
       CompanyName:'CN3' },
      { FirstName: 'Leno', LastName: 'Junus', Email: 'apple5@yopmail.com', PhoneNumber: '5456406.00',
      CompanyName:'CN4' },
    ];
   
   
    this.CompanyNames = [
      { label: 'CN1', value: 'CN1' },
      { label: 'CN2', value: 'CN2' },
      { label: 'CN3', value: 'CN3' },
      { label: 'CN4', value: 'CN4' },
  
  ];
  
   
    this.cols = [
      { field: 'FirstName', header: 'Name' },
      { field: 'PhoneNumber', header: 'Phone No' },
      { field: 'Email', header: 'Email' },
      { field: 'CompanyName', header: 'Company Name' }
  ];
  }

  onFormSubmit(usersData){
    debugger;
    if(this.IsEditUsers==false){
     this.clients.push({FirstName:usersData.FirstName,LastName:usersData.LastName,
     Email:usersData.Email,PhoneNumber:usersData.PhoneNo,
      CompanyName:usersData.CompanyName
      });
      this.toastr.success("Client Added Successfully !")
    }
    else{
      let currentUser=usersData;
      let usersArray=this.clients;
      if(usersData.UserType==null){
        usersData.UserType="Manager";
      }
      this.clients.forEach(function (item, index) {
        if (item.Email === currentUser.Email) {
          item.FirstName=usersData.FirstName;
          item.LastName=usersData.LastName;        
          item.Email=usersData.Email;
          item.PhoneNumber=usersData.PhoneNo;
          item.CompanyName=usersData.CompanyName;

        }
  
     });
     this.toastr.success("Client Updated Successfully !")
    }
   
      this.modalRef.hide();
     
    }
    
    OpenDeletePopup(usersData,Deletetemplate: TemplateRef<any>) {
      this.deletemodalRef = this.modalService.show(Deletetemplate);
      this.CurrentUsers=usersData;
    }
  
    DeleteClient(){
      debugger;
      var i = 0;
      let usersArray=this.clients;
      let currentUser=this.CurrentUsers;
      usersArray.forEach(function (item, index) {
        if (item.Email === currentUser.Email) {
          usersArray.splice(index, 1);
        }
      });
      this.clients=usersArray;
      this.toastr.success("Client Deleted Successfully !")
      this.deletemodalRef.hide();
     }
  
     OpenEditPopup(usersData,template: TemplateRef<any>,IsEdit) {
      this.IsEditUsers=true; 
     
      this.modalRef = this.modalService.show(template);
       // input data to form
       this.addUserForm.reset({ client: new Clients(), FirstName: usersData.FirstName, LastName: usersData.LastName,CompanyName:usersData.CompanyName,
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
   

}
