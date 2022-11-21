import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgSelectOption } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'
import { ListaRutasComponent } from './components/list-rutas/list-rutas.component';
import { AddRutaComponent } from './components/add-ruta/add-ruta.component';
import { AddConductorComponent } from './components/add-conductor/add-conductor.component';
import { RutasService } from './services/ruta.service';
import { ConductorService } from './services/conductor.service';
import { LoginService } from './services/login.service';
import { SMSService } from './services/sms.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ListaRutasComponent,
    AddRutaComponent,
    AddConductorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [RutasService,ConductorService,LoginService,SMSService, CookieService
],
  bootstrap: [AppComponent]
})
export class AppModule { }