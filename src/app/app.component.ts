import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { City } from './models/city';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(TodayComponent, { static: false })
  private todayComponent!: TodayComponent;
  showChild: boolean = true;
  myControl = new FormControl();
  title = 'Weather Forecast';
  selectedCity: City | undefined;
  options: City[] = [
    { id: 1, name: 'Bandung', latitude: -6.9344694, longitude: 107.6049539 },
    { id: 2, name: 'Jakarta', latitude: -6.2146, longitude: 106.8451 },
    { id: 3, name: 'Medan', latitude: 3.5833, longitude: 98.6667 },
    { id: 4, name: 'Yogyakarta', latitude: -7.8014, longitude: 110.3647 },
    { id: 5, name: 'Palembang', latitude: -2.9167, longitude: 104.7458 },
    { id: 6, name: 'Semarang', latitude: -6.9931, longitude: 110.4208 },
    { id: 7, name: 'Surabaya', latitude: -7.2491, longitude: 112.7510 },
    { id: 8, name: 'Bali', latitude: -8.3333, longitude: 115.0000 }
  ];
  filteredOptions: Observable<City[]> | undefined;

  todayMenuClass: string = "active";
  sevendaysMenuClass: string = "";

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
    let _selectedCity = localStorage.getItem('selectedCity');
    this.selectedCity = _selectedCity === null || _selectedCity === undefined ? undefined : JSON.parse(_selectedCity);
  }

  displayFn(city: City): string {
    this.selectedCity = city;

    localStorage.setItem('coordinate', [this.selectedCity.latitude, this.selectedCity.longitude].toString());
    localStorage.setItem('location', this.selectedCity.name);
    localStorage.setItem('selectedCity', JSON.stringify(city));
    window.location = window.location;
    return city && city.name ? city.name : '';
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  menuClick(value: string): void {
    if (value === "todayMenuClass") {
      this.todayMenuClass = "active";
      this.sevendaysMenuClass = "";
    }
    else if (value === "sevendaysMenuClass") {
      this.todayMenuClass = "";
      this.sevendaysMenuClass = "active";
    }
  }
}
