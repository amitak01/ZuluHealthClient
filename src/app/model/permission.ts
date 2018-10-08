export class Permission{
    PermissionId:number;
    Title:string;
    // UserType:string;  
}

export class UsersPerssion{
    UserId:number;
    UserName:string;
}

export class UserSelectedPerssion{
    UserId:number;
    PermissionId:number;
    Title:string;
    UserType:string;
}
