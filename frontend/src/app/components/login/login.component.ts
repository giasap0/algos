import { Component, OnInit,ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {User} from './../../dataModels/User';
//import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
//  providers: [UserService]
})
export class LoginComponent implements OnInit {

	user : User = {
		code: 'abcdz',
		loginDate: new Date(),
		username: '',
		password: ''
	};

/*  constructor( private route: ActivatedRoute,
	private fb: FormBuilder,
	private authenticationService: UserService,
	public router: Router ) {
		//bind data to the form elements
	}
	ngOnInit() {
		this.authenticationservice.logout();
	}
*/
	constructor( private fmodule: FormsModule
				) {
	}

	ngOnInit() {
	}
}
