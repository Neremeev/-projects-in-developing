import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import * as Rx from 'rxjs';

import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private apiService: ApiService) { }

    stationsSubject = new Rx.Subject();

    getStations() {
      this.apiService.getStation().subscribe((response: HttpResponse) => {
        this.stationsSubject.next(response.stations);
      } );
    }
}