import { NormalizePipe } from './../../pipes/normalize.pipe';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/books';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var jQuery:any;

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
@Input() editBookModal: Book;
@Input() takenTitles: [string];
@Output() editBookEvent = new EventEmitter<Book>();
normalizePipe: NormalizePipe = new NormalizePipe();
editForm: FormGroup;
defaultImg: string = "../assets/images/default.png";


constructor(){ }

ngOnInit() { }

// Methods
saveBook(){
  this.editBookEvent.emit(this.editForm.value);
  this.reset();
}

forbbidenTitles(control: FormControl): {[s: string]: boolean}{
  if(!control.value || !this.editBookModal){
    return null;
  }
  if(this.takenTitles.indexOf(this.normalizePipe.transform(control.value)) !== -1 && 
    this.normalizePipe.transform(this.editForm.get('title').value) !== this.normalizePipe.transform(this.editBookModal.title)){
    return {'titleIsForbidden': true};
  }
  return null;
}

// reset form's pristine, touched so on..
reset(){
  jQuery("#edit-book-modal").modal("hide");
  this.editForm.reset(this.editForm.value);
}

// when modal is opened by parent
public initForm(book: Book){
  this.editForm = new FormGroup({
    'title': new FormControl(null, [Validators.required, this.forbbidenTitles.bind(this)]),
    'author': new FormControl(null, Validators.required),
    'date': new FormControl(null, [Validators.required]),
    'img': new FormControl(null),
    'price': new FormControl(null)
    });
  this.editForm.reset({
    'title':this.normalizePipe.transform(book.title),
    'author': this.normalizePipe.transform(book.author),
    'date': book.date,
    'img': book.img,
    'price': book.price
  });
};

}

