import { Component, OnInit } from '@angular/core';
import {UploadCodingDoc} from '../../model/cases'

@Component({
  selector: 'app-useruploadcoding',
  templateUrl: './useruploadcoding.component.html',
  styleUrls: ['./useruploadcoding.component.css']
})
export class UseruploadcodingComponent implements OnInit {
  
  codeDocList:UploadCodingDoc[];

  cols: any[];
  constructor() { }

  ngOnInit() {
    this.codeDocList=[
      {UploadCodingDocId:"1",PatientName:"FRANKLIN, JAMES",MRN:"2866",UploadCodingDoc:"ZULU.doc",ChargeQuery:"",UserId:"1",CaseId:"1"},
      {UploadCodingDocId:"2",PatientName:"FORD, RYAN",MRN:"2800",UploadCodingDoc:"Coding.doc",ChargeQuery:"",UserId:"2",CaseId:"2"},
      {UploadCodingDocId:"3",PatientName:"GILLIARD, JOHN",MRN:"2878",UploadCodingDoc:"Coding.xls",ChargeQuery:"",UserId:"2",CaseId:"3"},
      {UploadCodingDocId:"4",PatientName:"HAMMONDS, CALVIN",MRN:"3531",UploadCodingDoc:"",ChargeQuery:"",UserId:"2",CaseId:"4"},
      {UploadCodingDocId:"5",PatientName:"HEARST ,LATOYA ",MRN:"3536",UploadCodingDoc:"",ChargeQuery:"",UserId:"2",CaseId:"5"},
      {UploadCodingDocId:"6",PatientName:"BUTLER,SHELDON ",MRN:"4226",UploadCodingDoc:"",ChargeQuery:"",UserId:"3",CaseId:"6"},
      {UploadCodingDocId:"7",PatientName:"MALONE, DARREN",MRN:"4222",UploadCodingDoc:"",ChargeQuery:"",UserId:"3",CaseId:"7"},
      {UploadCodingDocId:"8",PatientName:"RADHI, WASAN",MRN:"2961",UploadCodingDoc:"",ChargeQuery:"",UserId:"3",CaseId:"8"},
      {UploadCodingDocId:"9",PatientName:"DOVE, GERALDINE ",MRN:"4184",UploadCodingDoc:"",ChargeQuery:"",UserId:"4",CaseId:"9"},
      {UploadCodingDocId:"10",PatientName:"YOUSSEF,JOE ",MRN:"4200",UploadCodingDoc:"",ChargeQuery:"",UserId:"4",CaseId:"10"},
      {UploadCodingDocId:"11",PatientName:"JUDITH ,MASON ",MRN:"3071",UploadCodingDoc:"",ChargeQuery:"",UserId:"4",CaseId:"11"},
      {UploadCodingDocId:"12",PatientName:"SAADI, KISHIA",MRN:"3368",UploadCodingDoc:"",ChargeQuery:"",UserId:"5",CaseId:"12"},
      {UploadCodingDocId:"13",PatientName:"FRAZIER, TERRANCE",MRN:"4097",UploadCodingDoc:"",ChargeQuery:"",UserId:"5",CaseId:"13"},
      {UploadCodingDocId:"14",PatientName:"YOUNG, DAVEN",MRN:"3341",UploadCodingDoc:"",ChargeQuery:"",UserId:"5",CaseId:"14"},
    ]

    this.cols=[
      { field: 'MRN', header: 'MRN' },
      { field: 'PatientName', header: 'PatientName' },
      {field:'UploadCodingDoc',header:'UploadCodingDoc'},
      {field:'ChargeQuery',header:'ChargeQuery'}
   

    ]

  }

  SaveChargeEntryQuery(data){
    debugger;
  }

}
