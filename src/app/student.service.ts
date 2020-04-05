import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import { Observable, from } from 'rxjs';
import {catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //base api url
  public url = 'http://nixdev1.xhost.name/';//http://nixdev1.xhost.name/
  constructor(private http: HttpClient) { }

  getResult(degree, year, board, roll){
  
    return this.http.get(this.url + 'result.php?degree=' + degree + '&year=' + year + '&board=' + board + '&roll_id=' + roll)
    .pipe(catchError(this.handleError));
  }

  handleError(err){
    return throwError(err)
  }

}

