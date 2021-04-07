import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetails } from '../../models/weather-details';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService {

  protected key = 'd141a749a2924fd9a46185043210304';
 
  constructor(injector: Injector) {
    super(injector);
  }
  getWeatherQuery(queryTerm: string): Observable<WeatherDetails> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.key}`;
    return this.get<WeatherDetails>(`${url}` +
    `${this.buildQueryParameters('&q', queryTerm)}` +
    `${this.buildQueryParameters('&aqi', 'no')}`);
  }

  getWeatherDaysQuery(queryTerm: string, days: number): Observable<WeatherDetails> {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.key}`;
    return this.get<WeatherDetails>(`${url}` +
    `${this.buildQueryParameters('&q', queryTerm)}` +
    `${this.buildQueryParameters('&days', days)}` +
    `${this.buildQueryParameters('&aqi', 'no')}` +
    `${this.buildQueryParameters('&alerts', 'no')}`);
  }

}
