import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** bootstrap modules */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

/** components */
import { LoginComponent } from './components/login/login.component';
import { SignalCreationComponent } from './components/signal-creation/signal-creation.component';


/** services */
import { TipiProdottoService } from './service/tipi-prodotto.service';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	SignalCreationComponent,
	NavbarComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	BsDropdownModule.forRoot(),
	AppRoutingModule
  ],
  providers: [ TipiProdottoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
