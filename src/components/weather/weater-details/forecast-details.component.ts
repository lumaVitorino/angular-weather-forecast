import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ForecastDay } from 'src/models/forecast-day';
import { ForecastHour } from 'src/models/forecast-hour';
import { WeatherDetails } from 'src/models/weather-details';
import { WeatherService } from 'src/services/weather/weather.service';

@Component({
	selector: 'app-forecast-details',
	templateUrl: './forecast-details.component.html',
	styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

	@Input() days: number = 0;
	@Input() location: string | undefined;
	historyWeather: WeatherDetails = new WeatherDetails;
	forecastDays: ForecastDay[] = [];

	constructor(private weatherSerivce: WeatherService) {
		
	}

	ngOnInit(): void {
		this.weatherSerivce.getWeatherDaysQuery(this.location ? this.location : '', this.days).subscribe(weather => {
			if (weather) {
				this.historyWeather = weather;
				this.forecastDays = weather.forecast.forecastday;
				console.log(this.forecastDays);
			}
		});
	}

}
