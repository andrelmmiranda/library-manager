import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrl: './read-book.component.css'
})
export class ReadBookComponent implements OnInit{
  books: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'author', 'action'];

  constructor(private bookService: BookService) {}

  ngOnInit(): void{
    this.bookService.getAll().subscribe((books: any) =>{
      this.books = books;
    });
  }
}
