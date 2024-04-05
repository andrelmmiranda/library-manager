import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css'
})
export class NewBookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToCreateBook(){
    this.router.navigate(['/livros/criar'])
  }

}
