import { Component, OnInit ,TemplateRef} from '@angular/core';
import {cases} from '../../model/cases';
import * as _ from 'underscore';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {DataExchangeService} from '../../services/data-exchange.service';

@Component({
  selector: 'app-userscases',
  templateUrl: './userscases.component.html',
  styleUrls: ['./userscases.component.css']
})
export class UserscasesComponent implements OnInit {
  casesList:cases[];
  CaseAsPerRole:cases[];
  cols: any[];
  uploadedFiles: any[] = [];
  uploadmodalRef:BsModalRef;
  downloadmodalref:BsModalRef;
  CaseStatusFilter:any[];
  UserTypesFilter:any[];
  SelectedId:string;
  files:any;
  constructor( private toaster:ToastrService,private modalService: BsModalService,private DEService:DataExchangeService) { 
    this.DEService.changeDashBoardMessage(false);
    this.DEService.UserChangeId.subscribe(message => this.SelectedId = message)
  }
  AdminSelectedUserRole
  ngOnInit() {
    
    this.casesList=
   [{caseId:1,Title:"Case1",CompanyName:"Test",MRN:"18139",UserType:"Coder",Status:"Recieved",Comment:"Comment abc"},
   {caseId:2,Title:"Case2",CompanyName:"Test",MRN:"18139",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:3,Title:"Case1",CompanyName:"Test",MRN:"18567",UserType:"Coder",Status:"Coding Clarification",Comment:""},
   {caseId:4,Title:"Case1",CompanyName:"Test",MRN:"18567",UserType:"Coder",Status:"Coding Clarification",Comment:""},
   {caseId:5,Title:"Case1",CompanyName:"Test",MRN:"18567",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:6,Title:"Case1",CompanyName:"Test",MRN:"18567",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:7,Title:"CaseSample",CompanyName:"Test",MRN:"1903",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:8,Title:"CaseSample",CompanyName:"Test",MRN:"1903",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:9,Title:"CaseSample",CompanyName:"Test",MRN:"1903",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:10,Title:"test",CompanyName:"Test",MRN:"18136",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:11,Title:"test",CompanyName:"Test",MRN:"18136",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:12,Title:"test",CompanyName:"Test",MRN:"18136",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:13,Title:"test",CompanyName:"Test",MRN:"18136",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:14,Title:"test",CompanyName:"Test",MRN:"18136",UserType:"Coder",Status:"Recieved",Comment:""},
   {caseId:15,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:16,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:17,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:18,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:19,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:"Comment abc"},
   {caseId:20,Title:"test",CompanyName:"Test",MRN:"34567",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:21,Title:"test",CompanyName:"Test",MRN:"18139",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:22,Title:"test",CompanyName:"Test",MRN:"18139",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:15,Title:"test",CompanyName:"Test",MRN:"18139",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:16,Title:"test",CompanyName:"Test",MRN:"18139",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:17,Title:"test",CompanyName:"Test",MRN:"18139",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:18,Title:"test",CompanyName:"Test",MRN:"1903",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:19,Title:"test",CompanyName:"Test",MRN:"1903",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:20,Title:"test",CompanyName:"Test",MRN:"1903",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:21,Title:"test",CompanyName:"Test",MRN:"1903",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:22,Title:"test",CompanyName:"Test",MRN:"1865",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:23,Title:"test",CompanyName:"Test",MRN:"1865",UserType:"Coder",Status:"Charges Entered",Comment:""},
   {caseId:24,Title:"test",CompanyName:"Test",MRN:"1865",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:25,Title:"test",CompanyName:"Test",MRN:"1700",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:26,Title:"test",CompanyName:"Test",MRN:"1700",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:27,Title:"test",CompanyName:"Test",MRN:"1700",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:28,Title:"test",CompanyName:"Test",MRN:"1700",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:29,Title:"test",CompanyName:"Test",MRN:"18138",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:30,Title:"test",CompanyName:"Test",MRN:"18138",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:31,Title:"test",CompanyName:"Test",MRN:"18138",UserType:"",Status:"Complete",Comment:"done"},
   {caseId:32,Title:"test",CompanyName:"Test",MRN:"1810",UserType:"",Status:"Complete",Comment:"done"},
   {caseId:33,Title:"test",CompanyName:"Test",MRN:"1810",UserType:"",Status:"Complete",Comment:"done"},
  ];

  this.CaseAsPerRole=_.where(this.casesList, localStorage.getItem("AdminSelectedUserRole"));
  this.cols = [
    { field: 'Title', header: 'Title' },
    { field: 'CompanyName', header: 'Company' },
    { field: 'UserType', header: 'User type' },
    { field: 'MRN', header: 'MRN' },
    { field: 'Status', header: 'Status' },
    { field: 'Comment', header: 'Comment' },

];
this.CaseStatusFilter = [
  {label:  'InCoding', value: 'InCoding'},
  {label: 'Coding Ready', value: 'Coding Ready'},
  {label: 'Received', value: 'Received'},
  {label: 'Missing Documentation – Op Notes', value: 'Missing Documentation – Op Notes'},
  {label: 'Charges Entered', value: 'Charges Entered'},
  {label: 'Missing Documentation', value: 'Missing Documentation'},
  {label: 'Claim Billed', value: 'Claim Billed'},
  {label: 'Complete', value: 'Complete'}
   ];
   this.UserTypesFilter = [
    { label: 'Biller', value: 'Biller' },
    { label: 'Coder', value: 'Coder' },
    { label: 'Collector', value: 'Collector' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Supervisor', value: 'Supervisor' },
    { label: 'PAS', value: 'PAS' },

   ];
  }

  onUpload(event) {
    debugger;
    for(let file of event.files) {
        this.uploadedFiles.push(file);
       
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}



    
OpenUploadPopup(uploadCaseTemplate: TemplateRef<any>) {
  this.uploadmodalRef = this.modalService.show(uploadCaseTemplate);
  // this.CurrentUsers=usersData;

}

    
OpenDownloadPopup(downloadCaseTemplate: TemplateRef<any>) {
  this.files=[{Title:"Medical History"},{Title:"Insurance detail"},{Title:"document"}];
  this.downloadmodalref = this.modalService.show(downloadCaseTemplate);
  // this.CurrentUsers=usersData;
}

downloadFile(){
  let data:any;
  data=[[1,"test","Test","Manager"],[1,"test","Test","Manager"],[1,"test","Test","Manager"],[1,"test","Test","Manager"]];

  var blob = new Blob([data], { type: 'text/csv' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
}


SaveStatusComment(data){
  debugger;
  let selectedCase=_.where(this.casesList, {caseId: data.caseId});
  selectedCase[0].Comment=data.Comment;
  selectedCase[0].Status=data.Status;
  this.casesList.forEach(function (item, index) {
    if (item.caseId === data.caseId) {
     
      item.Comment=data.Comment;
      item.Status=data.Status;

    }

 });

  this.toaster.success("Updated Successfully !");
 
  }

}
