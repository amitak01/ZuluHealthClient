import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './shared/auth-gaurd/auth-gaurd';

//services
import {AuthenticationService} from './services/authentication.service'
import {AppSettingsService} from './services/app-settings.service'
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ChartModule} from 'primeng/chart';
import {DataExchangeService} from './services/data-exchange.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgIdleKeepaliveModule,
    HttpModule,
    HttpClientModule,
    LoginModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ChartModule,
    AngularMultiSelectModule,
    MenubarModule,
    MenuModule

  ],
  providers: [HttpClient, AppSettingsService,AuthenticationService, AuthGuard,DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

