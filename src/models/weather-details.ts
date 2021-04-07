import { Location } from './location';
import { Weather } from './weather';
import { Forecast } from './forecast';

export class WeatherDetails {
    location!: Location;
    current!: Weather;
    forecast!: Forecast;
}
