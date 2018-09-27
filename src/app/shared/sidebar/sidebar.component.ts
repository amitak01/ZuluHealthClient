import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggleCount:any;
  constructor(private DEServices:DataExchangeService) { }

  ngOnInit() {
    debugger;
    // this.DEServices.currentResponse.subscribe(data => this.toggleCount = data);
    this.DEServices.currentResponse.subscribe(message => {
      debugger;
      this.toggleCount = message==false?true:false;
     // if(message)document.getElementById('side_body').classList.add('side_full_body');
    })
    let t=this.toggleCount;
  }

}
