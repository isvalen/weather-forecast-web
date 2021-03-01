import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { SevenDaysWeather, CurrentWeather } from '../models/sevendaysweather';
import { SevenDaysWeatherService } from '../models/sevendaysweather.service';

@Component({
  selector: 'app-seven-days',
  templateUrl: './sevendays.component.html',
  styleUrls: ['./sevendays.component.css']
})

export class SevenDaysComponent implements OnInit {
  myControl = new FormControl();
  sevendaysWeather: SevenDaysWeather;
  location: string;
  dateNow: string;

  //filteredHourlyWeathers: Observable<CurrentWeather[]> | undefined;
  filteredHourlyWeathers: Observable<CurrentWeather[]> | undefined;

  constructor(private sevendaysweatherService: SevenDaysWeatherService) {
    this.sevendaysWeather = new SevenDaysWeather();
    this.getLocation();
    this.dateNow = (new Date()).getHours() + ":" + (new Date().getMinutes());
    this.location = "Loading...";
    this.filteredHourlyWeathers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'number' ? value : value.dt),
      map(dt => dt ? this._filter(dt) : this.sevendaysWeather.hourly.slice())
    );
  }

  getLocation(): void {
    let coordinates = localStorage.getItem('coordinate');
    let loc = localStorage.getItem('location');

    if (coordinates === null || coordinates === undefined) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          localStorage.setItem('coordinate', [latitude, longitude].toString());

          this.sevendaysweatherService.getSevenDaysWeather(latitude, longitude).subscribe(result => { this.sevendaysWeather = result; this.location = loc ? loc + ", ID" : ""; console.log(result); });
          //this.sevendaysweatherService.getSevenDaysWeather(latitude, longitude).subscribe(result => { console.log(result) });
        });
      } else {
        console.log("No support for geolocation");
      }
    }
    else {
      const coor = coordinates.split(',');
      this.sevendaysweatherService.getSevenDaysWeather(Number(coor[0]), Number(coor[1])).subscribe(result => {
        this.sevendaysWeather = result;
        this.location = loc ? loc + ", ID" : "";
        console.log(result);
        //this.getHourlyWeathers()
      });
    }
  }

  private _filter(date: number): CurrentWeather[] {
    const today = new Date();
    const todayInString = today.getFullYear().toString() + today.getMonth().toString() + today.getDay().toString();
    const filterValue = new Date(date * 1000);

    return this.sevendaysWeather.hourly.filter(option => (option.dateInString === todayInString) || (option.hour === 12 || option.hour === 23));
  }

  // getHourlyWeathers(): void {
  //   this.filteredHourlyWeathers = undefined;
  //   const today = new Date();
  //   const todayInString = today.getFullYear().toString() + today.getMonth().toString() + today.getDay().toString();

  //   for (let i = 0; i < this.sevendaysWeather.hourly.length; i++) {
  //     const date = new Date(this.sevendaysWeather.hourly[i].dt * 1000);
  //     const dateInString = date.getFullYear().toString() + date.getMonth().toString() + date.getDay().toString();

  //     if (todayInString === dateInString) {
  //       if (date.getHours() === 12) {
  //         this.filteredHourlyWeathers.push(this.sevendaysWeather.hourly[i]);
  //       }
  //       else if (date.getHours() === 23) {
  //         this.filteredHourlyWeathers.push(this.sevendaysWeather.hourly[i]);
  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

}
