import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import {cases} from '../../model/cases';
import {DataExchangeService} from '../../services/data-exchange.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap';

let myAdd = function(x, y) { return x + y; };
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  
  private _name :string;
  get name(){
    return this._name;
  }
  

  casesList:cases[];
  cols: any[];
  uploadedFiles: any[] = [];
  uploadmodalRef:BsModalRef;
  downloadmodalref:BsModalRef
  files:any;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(private DEService: DataExchangeService, private toaster:ToastrService,private modalService: BsModalService) {
    this.DEService.changeDashBoardMessage(false);
    


   }

  
  ngOnInit() {
   this.casesList=[{caseId:1,Title:"test",CompanyName:"Test",UserType:"Manager"},
   {caseId:2,Title:"test",CompanyName:"Test",UserType:"Manager"},
   {caseId:3,Title:"test",CompanyName:"Test",UserType:"Manager"},
   {caseId:4,Title:"test",CompanyName:"Test",UserType:"Supervisor"},
   {caseId:5,Title:"test",CompanyName:"Test",UserType:"Manager"},
   {caseId:6,Title:"test",CompanyName:"Test",UserType:"Coder"},
   {caseId:7,Title:"test",CompanyName:"Test",UserType:"Manager"},
   {caseId:8,Title:"test",CompanyName:"Test",UserType:"Supervisor"},
   {caseId:9,Title:"test",CompanyName:"Test",UserType:"Coder"},
   {caseId:10,Title:"test",CompanyName:"Test",UserType:"Biller"},
  ];
  this.cols = [
    { field: 'Title', header: 'Case Title' },
    { field: 'CompanyName', header: 'Company Name' },
    { field: 'UserType', header: 'User type' },

];

  }

  Add<T,R>(a:T,b:R):void{

  }
  onUpload(event) {
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



}
