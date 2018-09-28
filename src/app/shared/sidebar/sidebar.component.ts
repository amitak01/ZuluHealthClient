import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  Output,
  EventEmitter, TemplateRef
} from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() redirectDashboard=new EventEmitter<boolean>();
  toggleCount:any;
  constructor(private DEServices:DataExchangeService,private Router:Router) { }

  ngOnInit() {
    debugger;
    // this.DEServices.currentResponse.subscribe(data => this.toggleCount = data);
    this.DEServices.currentResponse.subscribe(message => {
      debugger;
      this.toggleCount = message==false?true:false;
      if(message)document.getElementById('side_body').classList.add('side_full_body');
    })
    let t=this.toggleCount;
  }
  GotoDashBoard() {
    debugger;
    //this.voted.emit(true);
    this.DEServices.changeDashBoardMessage(true);
 
     this.Router.navigate(['/dashboard']);
 }


}
