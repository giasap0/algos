import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lotto } from '../dataModels/Lotto';
import { Segnalazione } from '../dataModels/Segnalazione';

@Component({
  selector: 'app-signal-creation',
  templateUrl: './signal-creation.component.html',
  styleUrls: ['./signal-creation.component.css']
})
export class SignalCreationComponent implements OnInit {

	/** contains all validated lotti plus one */
	public lottiList : Lotto[] = [
		{ordernum: 1, code: '', expiryDate: null, enabled: true }
	];

	public segnalazione : Segnalazione = null;

	constructor( private fmodule: FormsModule ) {
		this.segnalazione = new Segnalazione();
	}

	ngOnInit() {
	}

	//event handlers

	onAddLotto(lotto: Lotto) {
		lotto.enabled = false;

		let newLotto = new Lotto();
		newLotto.ordernum = lotto.ordernum+1;
		newLotto.code = '';
		newLotto.enabled = true;

		this.lottiList.push( newLotto  );
		this.segnalazione.listaLotti.push( lotto );
	}

	onRemoveLotto(lotto: Lotto) {
		this.lottiList = this.lottiList.filter(obj => obj.ordernum == lotto.ordernum);
		this.segnalazione.listaLotti = this.segnalazione.listaLotti.filter(obj => obj.ordernum == lotto.ordernum);
	}
}
