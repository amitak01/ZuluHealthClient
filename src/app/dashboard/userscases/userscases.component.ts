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
    [
    {caseId:1,PatientName:"FRANKLIN, JAMES",CompanyName:"Test",DOS:"6/1/2018",MRN:"18139",Physician:"MATWAY",Insurance:"FARMERS",UserType:"Coder",Status:"Recieved",Comment:"Comment abc"},
    {caseId:1,PatientName:"GILLIARD, JOHN",CompanyName:"Test",DOS:"6/7/2018",MRN:"18139",Physician:"MATWAY",Insurance:"GEICO",UserType:"Coder",Status:"Recieved",Comment:"Comment abc"},
    {caseId:3,PatientName:"FORD, RYAN",CompanyName:"Test",DOS:"1/6/2018",MRN:"18567",Physician:"HAITHAM MASRI",Insurance:"GEICO",UserType:"Coder",Status:"Coding Clarification",Comment:""},
    {caseId:1,PatientName:"HAMMONDS, CALVIN",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"HAITHAM MASRI",Insurance:"GEICO",UserType:"Coder",Status:"Recieved",Comment:"Comment abc"},
    {caseId:5,PatientName:"HEARST ,LATOYA ",CompanyName:"Test",DOS:"1/6/2018",MRN:"18567",Physician:"MATWAY",Insurance:"GEICO",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:6,PatientName:"SHORKEY,JEROME ",CompanyName:"Test",DOS:"1/6/2018",MRN:"18567",Physician:"AYMAN TATABISHY",Insurance:"USAA",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:7,PatientName:"COLEMAN, LUCRETIA",CompanyName:"Test",DOS:"1/6/2018",MRN:"1903",Physician:"AYMAN TATABISHY",Insurance:"USAA",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:8,PatientName:"BARNES- ROOKS, PAULA",CompanyName:"Test",DOS:"1/6/2018",MRN:"1903",Physician:"AYMAN TATABISHY",Insurance:"GEICO",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:9,PatientName:"BUTLER,SHELDON ",CompanyName:"Test",DOS:"5/8/2018",MRN:"1903",Physician:"MUSTAFA SHUKR",Insurance:"GEICO",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:10,PatientName:"AL-RUBAYE, RIYADH",CompanyName:"Test",DOS:"3/10/2018",MRN:"18136",Physician:"MUSTAFA SHUKR",Insurance:"NATIONWIDE INS",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:11,PatientName:"MALONE, DARREN",CompanyName:"Test",DOS:"10/9/2018",MRN:"18136",Physician:"MUSTAFA SHUKR",Insurance:"NATIONWIDE INS",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:12,PatientName:"DOVE, GERALDINE ",CompanyName:"Test",DOS:"9/9/2018",MRN:"18136",Physician:"SYED MOOSAVI",Insurance:"GEICO",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:13,PatientName:"RADHI, WASAN",CompanyName:"Test",DOS:"3/3/2018",MRN:"18136",Physician:"SYED MOOSAVI",Insurance:"GEICO",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:14,PatientName:"JOHNSON, BRENDA",CompanyName:"Test",DOS:"17/7/2018",MRN:"18136",Physician:"SYED MOOSAVI",Insurance:"MEDICARE",UserType:"Coder",Status:"Recieved",Comment:""},
    {caseId:15,PatientName:"JOHNSON, TERRANCE",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"ARVINDER DHILLON",Insurance:"MEDICARE",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:16,PatientName:"COLEMAN, LUCRETIA",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"ARVINDER DHILLON",Insurance:"MEDICARE",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:17,PatientName:"RADHI, WASAN",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"AMERISURE",Insurance:"MEDICARE",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:18,PatientName:"YOUSSEF,JOE ",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"AMERISURE",Insurance:"NATIONWIDE INS",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:19,PatientName:"SHEPPARD ,RENEE ",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"GEORGE IBRAHAIM",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:"Comment abc"},
    {caseId:20,PatientName:"JUDITH ,MASON ",CompanyName:"Test",DOS:"1/6/2018",MRN:"34567",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
    {caseId:21,PatientName:"JARTZ,ERIC ",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
    {caseId:22,PatientName:"ROWN, DWANA",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"AMER ZENI",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – Op Notes",Comment:""},
    {caseId:15,PatientName:"HAMIDA, LINA",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"KEVIN CRAWFORD",Insurance:"BCBS OF MI",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:16,PatientName:"HAMIDA, WAHID",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"HUSSEIN HURAIBI",Insurance:"BCBS OF MI",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:17,PatientName:"HOOKS, CANDICE",CompanyName:"Test",DOS:"1/6/2018",MRN:"18139",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:18,PatientName:"JARTZ,ERIC ",CompanyName:"Test",DOS:"1/6/2018",MRN:"1903",Physician:"HUSSIEN HURAIBI",Insurance:"YORK RISK SERVICE",UserType:"Biller",Status:"Coding Ready",Comment:""},
    {caseId:19,PatientName:"JUDITH ,MASON ",CompanyName:"Test",DOS:"12/1/2018",MRN:"1903",Physician:"HUSSIEN HURAIBI",Insurance:"YORK RISK SERVICE",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
    {caseId:20,PatientName:"ABDALLAH,NICHOL ",CompanyName:"Test",DOS:"10/1/2018",MRN:"1903",Physician:"MUSTAFA SHUKR",Insurance:"YORK RISK SERVICE",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
    {caseId:21,PatientName:"EVEREST, PHYLENA",CompanyName:"Test",DOS:"1/6/2018",MRN:"1903",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
    {caseId:22,PatientName:"CARTER, KENNETH",CompanyName:"Test",DOS:"1/12/2018",MRN:"1865",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Client",Status:"Missing Documentation – In Coding",Comment:""},
    {caseId:23,PatientName:"SHEPPARD ,RENEE ",CompanyName:"Test",DOS:"13/9/2018",MRN:"1865",Physician:"GEORGE IBRAHAIM",Insurance:"GEICO",UserType:"Coder",Status:"Charges Entered",Comment:""},
    {caseId:24,PatientName:"BEEMER, TROY",CompanyName:"Test",DOS:"12/9/2018",MRN:"1865",Physician:"GEORGE IBRAHAIM",Insurance:"METLIFE",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
    {caseId:25,PatientName:"YOUSSEF,JOE ",CompanyName:"Test",DOS:"21/10/2018",MRN:"1700",Physician:"RITA SABBAGH",Insurance:"METLIFE",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
    {caseId:26,PatientName:"NEELY, LATASHA",CompanyName:"Test",DOS:"10/2/2018",MRN:"1700",Physician:"RITA SABBAGH",Insurance:"STATE FARM",UserType:"Supervisor",Status:"Charges Entered",Comment:""},
    {caseId:27,PatientName:"SABRINA, JORDAN",CompanyName:"Test",DOS:"10/5/2018",MRN:"1700",Physician:"GEORGE IBRAHEIM",Insurance:"GEICO",UserType:"Biller",Status:"Claim Billed",Comment:""},
    {caseId:28,PatientName:"HAVEL, JOANN",CompanyName:"Test",DOS:"21/9/2018",MRN:"1700",Physician:"GEORGE IBRAHEIM",Insurance:"STATE FARM",UserType:"Biller",Status:"Claim Billed",Comment:""},
    {caseId:29,PatientName:"KEATON, MARYANN",CompanyName:"Test",DOS:"19/6/2018",MRN:"18138",Physician:"HUSSEIN HURAIBI",Insurance:"GEICO",UserType:"Biller",Status:"Claim Billed",Comment:""},
    {caseId:30,PatientName:"BUTLER, SHELDON",CompanyName:"Test",DOS:"1/6/2018",MRN:"18138",Physician:"GITLIN",Insurance:"STATE FARM",UserType:"Biller",Status:"Claim Billed",Comment:""},
    {caseId:31,PatientName:"BAZZI, HASSAN",CompanyName:"Test",DOS:"1/6/2018",MRN:"18138",Physician:"GITLIN",Insurance:"GEICO",UserType:"",Status:"Complete",Comment:"done"},
    {caseId:32,PatientName:"REED-WOODARD, IRIS",CompanyName:"Test",DOS:"1/6/2018",MRN:"1810",Physician:"HUSSEIN HURAIBI",Insurance:"AAA",UserType:"",Status:"Complete",Comment:"done"},
    {caseId:33,PatientName:"MEHDI, MOUHAMAD",CompanyName:"Test",DOS:"1/6/2018",MRN:"1810",Physician:"HUSSEIN HURAIBI",Insurance:"AAA",UserType:"",Status:"Complete",Comment:"done"},
   ];

  this.CaseAsPerRole=_.where(this.casesList, localStorage.getItem("AdminSelectedUserRole"));
  this.cols = [
    { field: 'PatientName', header: 'Patient' },
    { field: 'Physician', header: 'Physician' },
    {field:'MRN',header:'MRN'},
    {field:'DOS',header:'DOS'},
    { field: 'UserType', header: 'User type' },
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
