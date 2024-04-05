import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './views/main/main.component';
import { HomeComponent } from './templates/home/home.component';
import { NewBookComponent } from './components/book/new-book/new-book.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { DeleteBookComponent } from './components/book/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: WelcomeComponent },
      { path: 'livros', component: NewBookComponent },
      { path: 'livros/criar', component: CreateBookComponent },
      { path: "livros/editar/:id", component: UpdateBookComponent },
      { path: "livros/deletar/:id", component: DeleteBookComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
