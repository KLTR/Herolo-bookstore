import { EditBookComponent } from './../edit-book/edit-book.component';
import { ApiService } from './../../services/api.service';
import { Book } from './../../../models/books';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NormalizePipe } from './../../pipes/normalize.pipe';
import { FlashMessagesService } from 'angular2-flash-messages';

declare var jQuery:any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
books: any;
curr_books: [Book];
edit_book : Book;
delete_book: Book;
takenTitles : string[] = [];
NormalizePipe: NormalizePipe = new NormalizePipe();
 index = 0;
 isDataShow = false;
@ViewChild(EditBookComponent) editModal;
  constructor(
    private apiService: ApiService,
    private flashMessagesService: FlashMessagesService
) {
    apiService.getBooks().subscribe(data =>{
      this.books = data.books;
      console.log(this.books[this.index]);
      this.curr_books = this.books[this.index];
      this.normalizeTitles();

    })
   }

  ngOnInit() {
    // this.flashMessagesService.show('We are in about component!', { timeout: 500000 });
  }
// Methods

// set reference to book to edit and pass to edit-book
editBook(book: Book, op: string){
  if(op === "edit"){
    this.edit_book = book;
  }
  if(op === "add"){
    this.edit_book = new Book();
  }
  this.editModal.initForm(this.edit_book);
}
//get edited book from edit-book and save it in books array
saveBook($event){
  let index = 0;
  if(this.isBookExist(this.edit_book)){
    index = this.curr_books.indexOf(this.edit_book);
    this.deleteBook(this.edit_book);
    this.toastMessage(`${$event.title} was saved`,'alert-info',3000);

  }else{
    this.toastMessage(`Congrats! you have just added a new book: ${$event.title}`,'alert-info',3000);

  }
  //keep book at same index
  this.curr_books.splice(index, 0 ,$event);
  this.edit_book = null;
  this.normalizeTitles();

  
}
switchCategory(index: number){
  this.index = index;
  this.curr_books = this.books[this.index];
}
setDeleteBook(book: Book){
this.delete_book = book;
jQuery("#delete-book-modal").modal("show");

}
deleteBook(book: Book){
  this.curr_books.splice(this.curr_books.indexOf(book),1)
  this.normalizeTitles();
  this.toastMessage(`${book.title} has been deleted `,'alert-danger',3000);
  jQuery("#delete-book-modal").modal("hide");

}
isBookExist(book: Book) : boolean {
  if(this.curr_books.indexOf(book) !== -1){
    return true;
  }
  return false;
}
normalizeTitles(){
  // reset taken titles to allow changes
  this.takenTitles = [];
  for(let i = 0; i < this.books.length; i++){
    for(let j = 0; j < this.books[i].length ; j++){
      let title = this.NormalizePipe.transform(this.books[i][j].title)
      this.takenTitles.push(title)
    }
  }
  console.log(this.takenTitles);
}

toggleShown(){
  this.isDataShow = !this.isDataShow;
}

toastMessage(message: string, css: string, timeout: number){
  this.flashMessagesService.show(`${message}`, {cssClass: `${css}`, timeout: `${timeout}`});
}

}
