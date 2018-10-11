import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-sidebar',
  templateUrl: './account-sidebar.component.html',
  styleUrls: ['./account-sidebar.component.css']
})
export class AccountSidebarComponent implements OnInit {

  menus: MenuItem[];
  constructor(private route:Router) { }

  ngOnInit() {
    this.menus = [
      {
          label: 'User', icon: 'fa fa-fw fa-user',command: (event: Event) =>this.navigateToPath("user")      
      },
      {
          label: 'Roles', icon: 'fa fa-fw fa-soccer-ball-o',command: (event: Event) =>this.navigateToPath("roles")        
      },
      {
        label: 'Permission', icon: 'fa fa-fw fa-check',command: (event: Event) =>this.navigateToPath("permission")
    }
  ];
}

navigateToPath(data){
  debugger;
  if(data!="user")
localStorage.setItem("AdminSelectedUser","0"); 
localStorage.setItem("AdminSelectedUserRole","0") 
this.route.navigate(['/dashboard/'+data])
}

  

}
