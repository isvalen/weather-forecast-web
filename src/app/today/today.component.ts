import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/weather';
import { WeatherService } from '../models/weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit {
  weather: Weather;
  location: string;
  dateNow: string;

  constructor(private weatherService: WeatherService) {
    this.weather = new Weather();
    this.getLocation();
    this.dateNow = (new Date()).getHours() + ":" + (new Date().getMinutes());
    this.location = "Loading..."
  }

  getLocation(): void {
    let coordinates = localStorage.getItem('coordinate');
    if (coordinates === null || coordinates === undefined) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          localStorage.setItem('coordinate', [latitude, longitude].toString());

          this.weatherService.getWeather(latitude, longitude).subscribe(result => { this.weather = result; this.location = result.name + ", " + result.sys.country });
        });
      } else {
        console.log("No support for geolocation");
      }
    }
    else {
      const coor = coordinates.split(',');
      this.weatherService.getWeather(Number(coor[0]), Number(coor[1])).subscribe(result => { this.weather = result; this.location = result.name + ", " + result.sys.country });
    }
  }

  ngOnInit(): void {
  }

}
