import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
   

@Injectable({
  providedIn: 'root'
})

export class DataExchangeService {
  response:any=true;
  private countSource = new BehaviorSubject(false);
  currentResponse = this.countSource.asObservable();
  constructor() { }


  SaveToggleCount(check: boolean) {
    debugger;
      this.countSource.next(check);
    }

  
}
