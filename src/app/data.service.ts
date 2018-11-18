import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = '';
  sendData: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setData(val) {
    this.data = val;
  }

  getData() {
    return this.data;
  }
}
