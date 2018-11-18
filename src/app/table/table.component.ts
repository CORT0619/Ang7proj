import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: RadioComponent;

  birthdays = [
    { name: 'Nick Walsh', birth: '10/21/1993'},
    { name: 'Tosha Hamilton', birth: '2/12/1990'},
    { name: 'Adam Smalls', birth: '3/16/2005'},
    { name: 'Dick Plankton', birth: '6/27/1975'},
    { name: 'Sponge Bob', birth: '1/1/2001'},
    { name: 'Sammy Miles', birth: '12/22/1989'},
    { name: 'Poppy Popperton', birth: '11/21/1982'},
  ];

  constructor () { }

  ngOnInit() {
    this.birthToRead();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes ', changes);
    if (changes.data) {
      console.log('sort changes ', changes.data);
    }
  }

  birthToRead() {
    this.birthdays.forEach((elem, i, arr) => {
      arr[i].birth = moment(arr[i].birth).format('MMMM DD YYYY');
    });
  }

}
