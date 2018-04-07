import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalCreationComponent } from './signal-creation/signal-creation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: 'creaSegnalazione', component: SignalCreationComponent }
	,{ path: 'login', component: LoginComponent }
  ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {

}
