import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalCreationComponent } from './components/signal-creation/signal-creation.component';
import { LoginComponent } from './components/login/login.component';

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
