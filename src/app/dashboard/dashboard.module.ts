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
import {CheckboxModule} from 'primeng/checkbox';
import { PermissionsComponent } from './permissions/permissions.component';
import { CasesComponent } from './cases/cases.component';
import {FileUploadModule} from 'primeng/fileupload';
import { TabsModule } from 'ngx-bootstrap';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MultiSelectModule} from 'primeng/multiselect';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { PageMenubarComponent } from '../shared/page-menubar/page-menubar.component';
import {MegaMenuModule} from 'primeng/megamenu';

import { AccountSidebarComponent } from '../shared/account-sidebar/account-sidebar.component';
import { PasswordComponent } from './password/password.component';
import { UserscasesComponent } from './userscases/userscases.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';


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
        CheckboxModule,
        FileUploadModule,
        TabsModule.forRoot(),
        InputTextareaModule,
        MultiSelectModule,
        AutoCompleteModule,
        MenubarModule,
        MenuModule,
        TabMenuModule,
        MegaMenuModule
  ],
  declarations: [DashboardComponent,HeaderComponent,FooterComponent,SidebarComponent,
     ClientComponent, UserComponent, PermissionsComponent, CasesComponent,PageMenubarComponent,
     AccountSidebarComponent,PasswordComponent,UserscasesComponent, UserpermissionsComponent]
})
export class DashboardModule { }
