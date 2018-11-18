import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() sortProp: RadioComponent;

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
    if (changes.sortProp) {
      this.changeSort(changes.sortProp.currentValue);
    }
  }

  birthToRead() {
    this.birthdays.forEach((elem, i, arr) => {
      arr[i].birth = moment(arr[i].birth).format('MMMM DD YYYY');
    });
  }

  changeSort(sort) {
    if (sort === 'age') {
      this.sortAge();

    } else if (sort === 'name') {
      this.sortName();
    }
  }

  sortAge() {
    this.birthdays.sort(function(a, b) {
      const newA = new Date(a.birth);
      const newB = new Date(b.birth);

      if (newA < newB) {
        return -1;
      }

      if (newA > newB) {
        return 1;
      }

      return 0;
    });
  }

  sortName() {
    this.birthdays.sort(function(a, b) {
      const newA = a.name.toLowerCase();
      const newB = b.name.toLowerCase();

      if (newA > newB) {
        return 1;
      }

      if (newA < newB) {
        return -1;
      }

      return 0;
    });
  }
}
