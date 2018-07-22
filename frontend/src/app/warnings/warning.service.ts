import { Injectable } from '@angular/core';
import {Warning} from "./warning";

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  constructor() { }

  //placeholder
  warnings: Warning[] = []

  //mockup methods
  add( warn: Warning) : WarningService {
    if( warn != undefined ) {
      this.warnings.push(warn)
    }
    return this;
  }
}
