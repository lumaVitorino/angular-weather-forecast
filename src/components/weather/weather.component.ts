import { Component } from '@angular/core';
import { WeatherDetails } from 'src/models/weather-details';
import { WeatherService } from 'src/services/weather/weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

	fullWeather: WeatherDetails = new WeatherDetails;
	queryTerm: string = '';

	constructor(private weatherSerivce: WeatherService) {}

	onSearch() {
		this.weatherSerivce.getWeatherDaysQuery(this.queryTerm, 1).subscribe(weather => {
			if (weather) {
				this.fullWeather = weather;
			}
		});
	}
}
