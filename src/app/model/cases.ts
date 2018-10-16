export class cases{
    caseId:number;
    // Title:string;
    PatientName:string;
    UserType:string;
    Status:string;
    Comment:string;
    MRN:string;
    Physician:string;
    DOS:string;
    Insurance:string;
    CompanyName:string;
}
export class CaseStatus{
    StatusId:number;
    StatusTitle:string;
}

export class UploadCodingDoc{
    
    UploadCodingDocId:string;
    PatientName:string;
    MRN:string
    UploadCodingDoc:string;
    ChargeQuery:string;
    UserId:string;
    CaseId:string;
}