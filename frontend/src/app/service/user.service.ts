import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	private url: string = 'http://localhost:8080/algos/rest/';
	constructor(private http: Http) { }

	login(post): Observable<any> {
		const loginUrl = this.url + "login/" + post['username'] + '/' + post['password'];
		return this.http.get(loginUrl, {})
		.map(res => {
			const jsonresult = res.json();
			if (jsonresult.loginUserSuccess == true) {
				localStorage.setItem('algosLoggedUser', JSON.stringify(jsonresult.data));
			  }
			  return jsonresult;
			}
			, err => { return err;});
	}
	logout() {
		localStorage.removeItem('algosLoggedUser');
	}

}
