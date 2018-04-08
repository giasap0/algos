import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignalCreationComponent } from './signal-creation/signal-creation.component';
import { TipiProdottoService } from './service/tipi-prodotto.service';
import { AppRoutingModule } from './/app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignalCreationComponent
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
