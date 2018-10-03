export class UserLogin {
    UserName: string;
    Password: string;
    ErrorMessage: string;
}

export class Clients{
    FirstName:string;
    LastName:string;
    Email:string;
    CompanyName:string;
    Address:string;
    City:string;
    State:string;
    PhoneNumber:string;
    
}

export interface UserType {
  UserTypeId:number;
  UserTypeName:string;
}

export interface MyClients {
  ClientId:number;
  ClientName:string;
}

export class Users{
    FirstName:string;
    LastName:string;
    Email:string;
    UserType:string;
    Address:string;
    City:string;
    State:string;
    PhoneNumber:string;
    
}