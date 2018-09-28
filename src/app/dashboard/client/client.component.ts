import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private dashboard:DashboardComponent) { }

  ngOnInit() {
    this.dashboard.showDashboard=false;
  }

}
