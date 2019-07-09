import { Component, OnInit } from '@angular/core';
import booklistJSON from '../../../../assets/json/booklist.json';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  booklist: any = booklistJSON;

}
