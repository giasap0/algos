import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserService } from '../service/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //providers: [UserService]
})
export class LoginComponent implements OnInit {

/*  constructor( private route: ActivatedRoute,
	private fb: FormBuilder,
	private authenticationservice:UserService,
	public router: Router ) {
		//bind data to the form elements
	}

  ngOnInit() {
	  this.authenticationservice.logout();
  }
*/
	constructor() {}
	ngOnInit() {}
}
