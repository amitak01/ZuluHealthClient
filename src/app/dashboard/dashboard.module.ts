import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from '../Services/Authentication.Service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { UpperCasePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import {DropdownModule} from 'primeng/dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TextMaskModule } from 'angular2-text-mask';

import { PermissionsComponent } from './permissions/permissions.component';



@NgModule({
  imports: [
    DashboardRoutingModule,
        HttpModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot(),     
        AccordionModule.forRoot(),
        AccordionModule,
        NgxSpinnerModule,
        ChartModule,
        TableModule,
        DropdownModule,
        NgMultiSelectDropDownModule,
        TextMaskModule,

  ],
  declarations: [DashboardComponent,HeaderComponent,FooterComponent,SidebarComponent, ClientComponent, UserComponent, PermissionsComponent]
})
export class DashboardModule { }
