import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any>{
    return this.http.get('../assets/data/books.json');
  }
}
