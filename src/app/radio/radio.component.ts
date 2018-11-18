import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  @Output() radioOut: EventEmitter<string> = new EventEmitter<string>();

  model = {
    value: ''
  };

  constructor(
    private dataService: DataService
  ) { }

  getModelValue(/*event*/) {
    // console.log('event ', event);
    console.log('model.value ', this.model.value);
    return this.model.value;
  }

  emitVal() {
    this.dataService.setData(this.getModelValue());
    // this.radioOut.emit(this.getModelValue());
  }
}
