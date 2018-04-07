import { Lotto } from '../dataModels/Lotto';
import { CodiceDescrizione } from './CodiceDescrizione';


export class Segnalazione {
	public titolo: String;
	public creationDate: Date;
	public notificante: String;
	public produttore: String;
	public dataSegnalazioneOriginale: Date;
	public motivoRitiro: String;
	public denominazioneVendita: String;
	public codiceProdotto: String;
	public codiceEAN: String;
	public tipoProdotto: CodiceDescrizione;
	public modalitaConservazione: String;
	public listaLotti: Lotto[];
	public noteAggiuntive: String;

	constructor() {
		this.titolo = '';
		this.creationDate = new Date();
		this.notificante = '';
		this.produttore = '';
		this.dataSegnalazioneOriginale = null;
		this.motivoRitiro = '';
		this.denominazioneVendita = '';
		this.codiceProdotto = '';
		this.codiceEAN = '';
		this.tipoProdotto = null;
		this.modalitaConservazione = '';
		this.listaLotti = [];
		this.noteAggiuntive = null;
	}
}
