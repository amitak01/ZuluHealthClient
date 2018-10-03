import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Count:number=0;
  // toggleCount:boolean=;
  ShowToggles:boolean=false;
  constructor(private DEService:DataExchangeService,private router:Router) { }

  
  ngOnInit(){
    // this.DEService.currentResponse.subscribe(data => this.toggleCount = data)
  }

  ToggleSideBar() {
    if (this.Count % 2 === 0) {
      this.ShowToggles = true;
      document.getElementById('side_body').classList.add('side_full_body');


    } else {
      this.ShowToggles = false;
      document.getElementById('side_body').classList.remove('side_full_body');
    
    }
    this.Count++;
    this.DEService.SaveToggleCount(this.ShowToggles);
  }

  LogOut(){
    debugger;
    this.router.navigate(['/login']);
    localStorage.clear();
  
  }

  
 GotoDashBoard() {
<<<<<<< HEAD
 // this.redirectDashboard.emit(true);
=======
  // this.redirectDashboard.emit(true);
>>>>>>> 9cfaeea7e8ed12cf8777a5b98a43398f383c4957
   this.router.navigate(['/dashboard']);
}

}
