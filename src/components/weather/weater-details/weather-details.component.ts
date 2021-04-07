import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ForecastDay } from 'src/models/forecast-day';
import { WeatherDetails } from 'src/models/weather-details';
import { WeatherService } from 'src/services/weather/weather.service';

@Component({
	selector: 'app-weather-details',
	templateUrl: './weather-details.component.html',
	styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnChanges {

	@Input() fullWeather: WeatherDetails = new WeatherDetails;
	minTemp: number = 0;
	maxTemp: number = 0;
	showMoreDetails: boolean = false;

	constructor(private weatherSerivce: WeatherService) {}

	ngOnChanges(): void {
		if (this.fullWeather) {
			this.minTemp = this.fullWeather?.forecast?.forecastday ? this.fullWeather?.forecast?.forecastday[0].day?.mintemp_c : 0;
			this.maxTemp = this.fullWeather?.forecast?.forecastday ? this.fullWeather?.forecast?.forecastday[0].day?.maxtemp_c : 0;
		}
	}

	hasWeatherDetails() : boolean {
		return this.fullWeather.location != undefined;
	}

	moreDetails() {
		this.showMoreDetails = !this.showMoreDetails;
	}
}
