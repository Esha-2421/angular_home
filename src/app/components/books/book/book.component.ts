import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books:any;
  constructor(private bookService:BookService){};
  ngOnInit(){
    this.bookService.getAll().subscribe(res=>{
      console.log(res)
      this.books=res;
    })
  }
}
