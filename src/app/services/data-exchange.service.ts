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
  //for dashboard
  private dashBoardMessageSource = new BehaviorSubject(true);
  dashBoardMsg = this.dashBoardMessageSource.asObservable();

  //On User Change
  private UserChangeSource = new BehaviorSubject("");
  UserChangeId = this.UserChangeSource.asObservable();

  constructor() { }


  SaveToggleCount(check: boolean) {
    //debugger;
      this.countSource.next(check);
    }
  changeDashBoardMessage(message: boolean) {
  this.dashBoardMessageSource.next(message);
   }

   changeUserAction(message: string) {
    this.UserChangeSource.next(message);
     }
  
}
