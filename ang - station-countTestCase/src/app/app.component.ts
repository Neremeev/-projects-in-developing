import {Component, OnInit} from '@angular/core';
import { HttpResponse } from "@angular/common/http";

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private stationService: AppService) {}

  ngOnInit() {
    this.stationService.getStations();
  }

};