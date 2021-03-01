import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from './models/city';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities: City[] = [
      { id: 1, name: 'Bandung', latitude: -6.9344694, longitude: 107.6049539 },
      { id: 2, name: 'Jakarta', latitude: -6.2146, longitude: 106.8451 },
      { id: 3, name: 'Medan', latitude: 3.5833, longitude: 98.6667 },
      { id: 4, name: 'Yogyakarta', latitude: -7.8014, longitude: 110.3647 },
      { id: 5, name: 'Palembang', latitude: -2.9167, longitude: 104.7458 },
      { id: 6, name: 'Semarang', latitude: -6.9931, longitude: 110.4208 },
      { id: 7, name: 'Surabaya', latitude: -7.2491, longitude: 112.7510 },
      { id: 8, name: 'Bali', latitude: -8.3333, longitude: 115.0000 },
    ];
    return { cities };
  }
}