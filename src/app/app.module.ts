// Angular essentials
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
// Services
import { ApiService } from './services/api.service';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
// Pipes
import { SpecialPipe } from './pipes/special.pipe';
import { TitlePipe } from './pipes/title.pipe';
import { NormalizePipe } from './pipes/normalize.pipe';
// External Modules
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    EditBookComponent,
    SpecialPipe,
    TitlePipe,
    NormalizePipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
