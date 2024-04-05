import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string = 'https://library-manager-db.vercel.app/book';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book> {
    return this.http.get<Book>(this.url);
  }

  getById(id: string): Observable<Book> {
    return this.http.get<Book>(`${ this.url }/${ id }`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  update(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${ this.url }/${ id }`, book);
  }

  delete(id: string): Observable<Book> {
    return this.http.delete<Book>(`${ this.url }/${ id }`);
  }
}
