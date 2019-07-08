import { Component, OnInit } from '@angular/core';
import booklistJSON from '../../../assets/json/booklist.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  booklist: any = booklistJSON;

}
