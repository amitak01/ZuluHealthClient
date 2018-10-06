import { Component, OnInit } from '@angular/core';
import {cases} from '../../model/cases';
import {DataExchangeService} from '../../services/data-exchange.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  casesList:cases[];
  cols: any[];
  constructor(private DEService: DataExchangeService, private toaster:ToastrService) {
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

  onUpload(event) {
    debugger;
    // for(let file of event.files) {
     
    // }
  this.toaster.success("Uploaded Successfully !")
   // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
