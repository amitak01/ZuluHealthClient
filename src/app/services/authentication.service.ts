  import { Injectable } from '@angular/core';
  import { Http, Headers, Response, RequestOptions } from '@angular/http';
  import { Observable, of } from 'rxjs';
  import {HttpRequest} from '@angular/common/http';
  import { map } from 'rxjs/operators';
  

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
}
