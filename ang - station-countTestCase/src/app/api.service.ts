import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getStation() {
    return this.httpClient.get('http://server-heroku-test.herokuapp.com/data');
  }

}
