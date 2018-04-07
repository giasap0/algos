import { Injectable } from '@angular/core';
import { CodiceDescrizione } from '../dataModels/CodiceDescrizione';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TipiProdottoService {

  constructor() { }

  getAllTipiProdotto() : Observable<CodiceDescrizione[]>  {
	return of([ {code: 'yyy', description: 'secchi'}
		, {code: 'xxx', description: 'freschi'}
	]);
  }

}
