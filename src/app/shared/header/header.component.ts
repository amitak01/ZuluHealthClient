import {Component,
  OnInit,
  NgZone,
  ViewChild,
  Output,
  EventEmitter, TemplateRef} from '@angular/core';
import {DataExchangeService} from '../../services/data-exchange.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() redirectDashboard=new EventEmitter<boolean>();
  Count:number=0;
  // toggleCount:boolean=;
  ShowToggles:boolean=false;
  toggleCount:any;
  //global filter
  brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

    filteredBrands: any[];
    items: MenuItem[];


    brand: string;

    //global filter end


  constructor(private DEService:DataExchangeService,private router:Router) { }

  
  ngOnInit(){
     //this.DEService.currentResponse.subscribe(data => this.toggleCount = data)
     this.DEService.currentResponse.subscribe(message => {
      debugger;
      this.toggleCount = message==false?true:false;
      if(message)document.getElementById('side_body').classList.add('side_full_body');
    })

    //menu baar
    this.items = [
      {label: 'Account',
      command: (event: Event) =>this.navigateToPath()
    },
      {
          
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

  ToggleSideBar() {
    debugger;
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
    debugger;
    //this.voted.emit(true);
    this.DEService.changeDashBoardMessage(true);
 
     this.router.navigate(['/dashboard']);
 }
 filterBrands(event) {
  this.filteredBrands = [];
  for(let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          this.filteredBrands.push(brand);
      }
  }
}
navigateToPath(){
  debugger;
  this.router.navigate(['/dashboard/client']);
}

}
