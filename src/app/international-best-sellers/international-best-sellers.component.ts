import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-international-best-sellers',
  templateUrl: './international-best-sellers.component.html',
  styleUrls: ['./international-best-sellers.component.css']
})
export class InternationalBestSellersComponent implements OnInit {

  public books:Book[];
  constructor(public service:BooksService) { }

  ngOnInit() {
    this.books=this.service.getInternationalBooks();
    console.log(typeof this.books)
    for(let book of this.books)
    {
      console.log(book)
    }
  }

}
