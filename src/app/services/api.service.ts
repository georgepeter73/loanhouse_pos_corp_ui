import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../models/user';
import {MenuItem} from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private BASE_PATH = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  // Add options on Http Request
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle error on Http Request
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Status : ${error.status}, ` +
        `Response : ${error.error}`);
    }
    return throwError(
      'Something want wrong. please try again later.');
  }

  // Get users data
  getList(): Observable<User> {
    return this.http
      .get<User>(this.BASE_PATH + '/users')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  getMenuList(): Observable<MenuItem> {
    return this.http
      .get<MenuItem>('http://localhost:3000/data')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}
