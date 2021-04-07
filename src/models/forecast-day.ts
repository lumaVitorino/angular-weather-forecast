import { Condition } from "./condition"
import { Astro } from "./forecast-astro";
import { ForecastDate } from "./forecast-date";
import { ForecastHour } from "./forecast-hour";

export class ForecastDay {
    date!: Date;
    date_epoch!: number;
    day!: ForecastDate;
    astro!: Astro;
    hour!: ForecastHour[];
}
