import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SevenDaysWeather } from './sevendaysweather';

@Injectable({ providedIn: 'root' })
export class SevenDaysWeatherService {

    private weatherAPIKey = "cc29b8de565be3fd911de0301051be42";
    private weathersUrl = 'https://api.openweathermap.org/data/2.5/';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }


    /** GET weathers from the server */
    getSevenDaysWeather(lat: number, lon: number): Observable<SevenDaysWeather> {
        const url = `${this.weathersUrl}/onecall?exclude=minutely,alerts&units=metric&lat=${lat}&lon=${lon}&appid=${this.weatherAPIKey}`;
        return this.http.get<SevenDaysWeather>(url).pipe(
            tap(_ => this.log(`fetched getSevenDaysWeathersForTenDays lat=${lat}&lon=${lon}`)),
            catchError(this.handleError<SevenDaysWeather>(`getSevenDaysWeathersForTenDays lat=${lat}&lon=${lon}`))
        );
    }

    /** GET weather by id. Return `undefined` when id not found */
    getSevenDaysWeatherNo404<Data>(id: number): Observable<SevenDaysWeather> {
        const url = `${this.weathersUrl}/?id=${id}`;
        return this.http.get<SevenDaysWeather[]>(url)
            .pipe(
                map(weathers => weathers[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} weather id=${id}`);
                }),
                catchError(this.handleError<SevenDaysWeather>(`getSevenDaysWeather id=${id}`))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a SevenDaysWeatherService message with the MessageService */
    private log(message: string) {
        console.log(`SevenDaysWeatherService: ${message}`);
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/