export class WeatherSystem {

    get country(): string { return this.fcountry; }
    set country(country: string) {
        this.fcountry = country;
    }
    private fcountry: string;

    get sunrise(): number { return this.fsunrise; }
    set sunrise(sunrise: number) {
        this.fsunrise = sunrise;
    }
    private fsunrise: number;

    get sunset(): number { return this.fsunset; }
    set sunset(sunset: number) {
        this.fsunset = sunset;
    }
    private fsunset: number;

    constructor() {
        this.fcountry = "";
        this.fsunrise = 0;
        this.fsunset = 0;
    }
}