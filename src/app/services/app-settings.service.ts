import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import {HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
   response :any={};
  
  constructor() { }

 

  Login(data): Observable<any> {
    this.response.result=true;
    return of(this.response)
     }
     
  ForgetPassword(data):Observable<any>{
    this.response.result=true;
    return of(this.response); 
    }
}
