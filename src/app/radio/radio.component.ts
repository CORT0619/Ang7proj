import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  model = {
    value: ''
  };

  constructor() { }

  getModelValue() {
    console.log('model.value ', this.model.value);
    return this.model.value;
  }
}
