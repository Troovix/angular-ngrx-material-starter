import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {WeatherService} from './../../shared/services/weather.service';
@Component({
  selector: 'anms-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  constructor(
    private readonly weatherService: WeatherService,
  ) { }

  ngOnInit() {
  }

  public onWeather() {
    this.weatherService.getWeather();
  }

}
