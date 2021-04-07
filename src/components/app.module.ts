import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from 'src/services/weather/weather.service';
import { MatTabsModule } from '@angular/material/tabs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './pagelayout/pagelayout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherDetailsComponent } from './weather/weater-details/weather-details.component';
import { ForecastDetailsComponent } from './weather/weater-details/forecast-details.component';

@NgModule({
  declarations: [
	AppComponent,
    TopbarComponent,
    PageLayoutComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    ForecastDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
	  FormsModule,
	  BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { 
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
        ngModule: AppModule,
        providers: [
            WeatherService
        ],
    };
}
}
