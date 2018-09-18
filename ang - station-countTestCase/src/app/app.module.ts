import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GoogleMapComponent } from './google-map/google-map.component';
import {AppService} from './app.service';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8ECfIjkNyE2AVBlG4Fpd4rD2Y4q5Ytpk'
    })
  ],
  providers: [AppService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }