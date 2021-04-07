import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/weather',
		pathMatch: 'full'
	},
	{
		path: 'weather',
		children: [
			{
				path: '',
				component: WeatherComponent,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
