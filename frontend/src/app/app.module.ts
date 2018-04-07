import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignalCreationComponent } from './signal-creation/signal-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignalCreationComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
