import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showMessage } from '../../../utils/showmessage';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
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
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.bookService.getById(this.id).subscribe(book => {
      this.book = book;

      this.formClient.get('title')?.setValue(this.book?.title);
      this.formClient.get('author')?.setValue(this.book?.author);
    });
  }

  onSubmit() {
    if (this.formClient?.valid) {
      this.bookService.update(this.id!, this.formClient.value).subscribe({
        next: () => {
          this.snackBar.showMessage("Corre pro abraço que deu tudo certo!");
        },
        error: (err) => {
          this.snackBar.showMessage("Deu alguma merda aqui!", 'X', true);

          console.log(err);
        }
      });
      this.cancel();
    } else
      this.snackBar.showMessage('Deu alguma merda aqui!', 'X', true);
  }

  cancel(): void {
    this.router.navigate(['/livros']);
  }
}
