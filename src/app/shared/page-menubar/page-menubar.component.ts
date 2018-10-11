import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-menubar',
  templateUrl: './page-menubar.component.html',
  styleUrls: ['./page-menubar.component.css']
})
export class PageMenubarComponent implements OnInit {
  tabs:MenuItem[];
  constructor(private route:Router) { }

  ngOnInit() {
    this.tabs = [
      {label: 'Clients', icon: 'fa fa-fw fa-users',command: (event: Event) =>this.navigateToPath("client")},
      {label: 'Security', icon: 'fa fa-fw fa-lock',command: (event: Event) =>this.navigateToPath("user") },
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      ];
  }
  navigateToPath(data){
    this.route.navigate(['/dashboard/'+data])
  }

}
