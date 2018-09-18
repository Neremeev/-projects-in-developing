import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {AppService} from '../app.service';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  markers = [];

  zoom: number = 10;
  lat: number = 59.9434483211;
  lng: number = 30.3601813316;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.stationsSubject.subscribe((stations) => {
      this.markers = stations;
    });
  }

  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
  }

}