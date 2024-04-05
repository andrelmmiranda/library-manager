import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../../../interfaces/book';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { showMessage } from '../../../utils/showmessage';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent implements OnInit {
  formClient: FormGroup;

  book?: Book;

  id?: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: showMessage) {

    this.formClient = this.formBuilder.group({
      title: [{ value: '', disabled: true }],
      author: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.bookService.getById(this.id!).subscribe(book => {
      this.book = book;

      this.formClient.get('title')?.setValue(this.book?.title);
      this.formClient.get('author')?.setValue(this.book?.author);
    });
  }

  onSubmit() {
    this.bookService.delete(this.id!).subscribe({
      next: () => {
        this.snackBar.showMessage('Corre pro abraço que deu tudo certo!');
      },
      error: (err) => {
        this.snackBar.showMessage(`Deu alguma merda aqui: ${err.error.showMessage}`);
      }
    });
    this.cancel();
  }

  cancel(): void {
    this.router.navigate(['/livros']);
  }
} 
