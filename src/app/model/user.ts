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
    UsersId:string;
    FirstName:string;
    LastName:string;
    Email:string;
    UserType:string;
    PhoneNumber:string;
    Clients:string;
    
}