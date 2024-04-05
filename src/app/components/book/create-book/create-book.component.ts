import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showMessage } from '../../../utils/showmessage';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {
  formClient: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: showMessage,
    private bookService: BookService) {

    this.formClient = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.formClient.valid) {
      this.bookService.create(this.formClient.value).subscribe({
        next: () => {
          this.snackBar.showMessage('Corre pro abraço que deu tudo certo!');
        },
        error: (err) => {
          this.snackBar.showMessage('Deu alguma merda aqui!', 'X', true);
        }
      });
      this.cancel();
    } else {
      this.snackBar.showMessage('Deu alguma merda aqui!', 'X', true);
    }
  }

  cancel(): void {
    this.router.navigate(['livros']);
  }
}
