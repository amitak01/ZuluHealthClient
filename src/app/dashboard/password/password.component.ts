import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private DEService:DataExchangeService) { 
    this.DEService.changeDashBoardMessage(false);
  }

  ngOnInit() {
  }

}
