import { Component, OnInit } from '@angular/core';
import booklistJSON from '../../../assets/json/booklist.json';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
  }

  booklistSelection: any = booklistJSON[this.route.snapshot.paramMap.get("id")];
  booklistImage = Number(this.route.snapshot.paramMap.get("id")) + 1;

  

}
