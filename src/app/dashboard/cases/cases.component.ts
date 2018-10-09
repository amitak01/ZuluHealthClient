import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import {cases,CaseStatus} from '../../model/cases';
import {DataExchangeService} from '../../services/data-exchange.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap';
import { fromEventPattern } from 'rxjs';
import {SelectItem} from 'primeng/api';
import * as _ from 'underscore';

let myAdd = function(x, y) { return x + y; };
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  casesList:cases[];
  cols: any[];
  uploadedFiles: any[] = [];
  uploadmodalRef:BsModalRef;
  downloadmodalref:BsModalRef
  files:any;
  CaseStatus:CaseStatus[];
  casesListInCoding:cases[];
  casesListBilling:cases[];
  casesListCodingReady:cases[];
  casesListRecieved:cases[];
  casesListChargeEntry:cases[];
  casesListClaimBilled:cases[];
  casesListMissingDoc:cases[];
  casesListComplete:cases[];
  casesListMissingDocCode:cases[];
  CaseStatusFilter:any[];
  UserTypesFilter:any[];

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(private DEService: DataExchangeService, private toaster:ToastrService,private modalService: BsModalService) {
    this.DEService.changeDashBoardMessage(false);
    


   }

  
  ngOnInit() {
   this.casesList=
   [{caseId:1,Title:"Case1",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:"Comment abc"},
   {caseId:2,Title:"Case2",CompanyName:"Test",UserType:"Coder",Status:"Coding Ready",Comment:""},
   {caseId:3,Title:"Case1",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:4,Title:"Case1",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:5,Title:"Case1",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:6,Title:"Case1",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:7,Title:"CaseSample",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:8,Title:"CaseSample",CompanyName:"Test",UserType:"Coder",Status:"InCoding",Comment:""},
   {caseId:9,Title:"CaseSample",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:10,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:11,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:12,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:13,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Recieved",Comment:""},
   {caseId:14,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Recieved",Comment:""},
   {caseId:15,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:16,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:17,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:18,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:19,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – Op Notes",Comment:"Comment abc"},
   {caseId:20,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:21,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:22,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – Op Notes",Comment:""},
   {caseId:15,Title:"test",CompanyName:"Test",UserType:"Coder",Status:"Coding Ready",Comment:""},
   {caseId:16,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:17,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:18,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Coding Ready",Comment:""},
   {caseId:19,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:20,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:21,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:22,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Missing Documentation – In Coding",Comment:""},
   {caseId:23,Title:"test",CompanyName:"Test",UserType:"Coder",Status:"Charges Entered",Comment:""},
   {caseId:24,Title:"test",CompanyName:"Test",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:25,Title:"test",CompanyName:"Test",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:26,Title:"test",CompanyName:"Test",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
   {caseId:27,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:28,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:29,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:30,Title:"test",CompanyName:"Test",UserType:"Biller",Status:"Claim Billed",Comment:""},
   {caseId:31,Title:"test",CompanyName:"Test",UserType:"",Status:"Complete",Comment:"done"},
   {caseId:32,Title:"test",CompanyName:"Test",UserType:"",Status:"Complete",Comment:"done"},
   {caseId:33,Title:"test",CompanyName:"Test",UserType:"",Status:"Complete",Comment:"done"},
  ];
  this.casesListInCoding=_.where(this.casesList, {Status: "InCoding"});
  this.casesListBilling=_.where(this.casesList, {Status: "Missing Documentation – Op Notes"});
  this.casesListCodingReady=_.where(this.casesList, {Status: "Coding Ready"});
  this.casesListRecieved=_.where(this.casesList, {Status: "Recieved"});
  this.casesListChargeEntry=_.where(this.casesList, {Status: "Charges Entered"});
  this.casesListMissingDocCode=_.where(this.casesList, {Status: "Missing Documentation – In Coding"});
  this.casesListClaimBilled=_.where(this.casesList, {Status: "Claim Billed"});
  this.casesListComplete=_.where(this.casesList, {Status: "Complete"});



  this.cols = [
    { field: 'Title', header: 'Case Title' },
    { field: 'CompanyName', header: 'Company Name' },
    { field: 'UserType', header: 'User type' },

    { field: 'Status', header: 'Status' },
    { field: 'Comment', header: 'Comment' },

];
  this.CaseStatus = [
  {StatusId: 1, StatusTitle: 'InCoding'},
  {StatusId: 2, StatusTitle: 'Coding Ready'},
  {StatusId: 3, StatusTitle: 'Received'},
  {StatusId: 4, StatusTitle: 'Missing Documentation – Op Notes'},
  {StatusId: 5, StatusTitle: 'Charges Entered'},
  {StatusId: 6, StatusTitle: 'Missing Documentation'},
  {StatusId: 7, StatusTitle: 'Claim Billed'},
  {StatusId: 8, StatusTitle: 'Complete'}
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
disableEnable() {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
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
 this.casesListInCoding=_.where(this.casesList, {Status: "InCoding"});
 this.casesListBilling=_.where(this.casesList, {Status: "Missing Documentation – Op Notes"});
 this.casesListCodingReady=_.where(this.casesList, {Status: "Coding Ready"});
 this.casesListRecieved=_.where(this.casesList, {Status: "Recieved"});
 this.casesListChargeEntry=_.where(this.casesList, {Status: "Charges Entered"});
 this.casesListMissingDocCode=_.where(this.casesList, {Status: "Missing Documentation – In Coding"});
 this.casesListClaimBilled=_.where(this.casesList, {Status: "Claim Billed"});
 this.casesListComplete=_.where(this.casesList, {Status: "Complete"});
  this.toaster.success("Updated Successfully !");
 
  }


}
