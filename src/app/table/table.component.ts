import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() sortProp: string;

  birthdays = [
    { name: 'Nick Walsh', birth: '10/21/1993'},
    { name: 'Tosha Hamilton', birth: '2/12/1990'},
    { name: 'Adam Smalls', birth: '3/16/2005'},
    { name: 'Dick Plankton', birth: '6/27/1975'},
    { name: 'Sponge Bob', birth: '1/1/2001'},
    { name: 'Sammy Miles', birth: '12/22/1989'},
    { name: 'Poppy Popperton', birth: '11/21/1982'},
  ];

  constructor (
    private dataServ: DataService
  ) { }

  ngOnInit() {
    this.birthToRead();
    this.dataServ.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sortProp) {
      console.log('sort changes ', changes.sortProp);
    }
  }

  birthToRead() {
    this.birthdays.forEach((elem, i, arr) => {
      arr[i].birth = moment(arr[i].birth).format('MMMM DD YYYY');
    });
  }

}
