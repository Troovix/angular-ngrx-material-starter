import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly _URL = 'https://api.openweathermap.org/data/2.5/weather?q='
  private readonly _CITY = 'Madrid'
  private readonly _LANG = 'ES'
  private readonly _APPID = 'aae97860de78632108ecc73036d6d17c'
  private readonly _RESULT = ''
  
  
  constructor(private readonly http: HttpClient) { 
    // something here
  }

  public getWeather() {

    /** Weather url composition **/
    const CONNECT_URL = this._URL + this._CITY + '&appid=' + this._APPID;
    this.http.get(CONNECT_URL).subscribe((data) => {
      console.log('WEATHER DATA: ' + data);
    });
  }
}
