export class SevenDaysWeather {
    get lat(): number { return this.flat; }
    set lat(lat: number) {
        this.flat = lat;
    }
    private flat: number;

    get lon(): number { return this.flon; }
    set lon(lon: number) {
        this.flon = lon;
    }
    private flon: number;

    get timezone(): string { return this.ftimezone; }
    set timezone(timezone: string) {
        this.ftimezone = timezone;
    }
    private ftimezone: string;

    get timezone_offset(): number { return this.ftimezone_offset; }
    set timezone_offset(timezone_offset: number) {
        this.ftimezone_offset = timezone_offset;
    }
    private ftimezone_offset: number;

    get current(): CurrentWeather { return this.fcurrent; }
    set current(current: CurrentWeather) {
        this.fcurrent = current;
    }
    private fcurrent: CurrentWeather;

    get hourly(): CurrentWeather[] { return this.fhourly; }
    set hourly(hourly: CurrentWeather[]) {
        this.fhourly = hourly;
    }
    private fhourly: CurrentWeather[];

    get daily(): DailyWeather[] { return this.fdaily; }
    set daily(daily: DailyWeather[]) {
        this.fdaily = daily;
    }
    private fdaily: DailyWeather[];


    constructor() {
        this.flat = 0;
        this.flon = 0;
        this.ftimezone = "";
        this.ftimezone_offset = 0;
        this.fcurrent = new CurrentWeather();
        this.fdaily = [];
        this.fhourly = [];

    }
}

export class CurrentWeather {
    get date(): Date {
        return new Date(this.dt * 1000)
    }

    get dateInString(): string {
        const _date = (new Date(this.dt * 1000));
        return _date.getFullYear().toString() + _date.getMonth().toString() + _date.getDay().toString();
    }

    get hour(): number {
        const _date = (new Date(this.fdt * 1000));
        return _date.getHours();
    }

    get dt(): number { return this.fdt; }
    set dt(dt: number) {
        this.fdt = dt;
    }
    private fdt: number;

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

    get temp(): number { return this.ftemp; }
    set temp(temp: number) {
        this.ftemp = temp;
    }
    private ftemp: number;

    get feels_like(): number { return this.ffeels_like; }
    set feels_like(feels_like: number) {
        this.ffeels_like = feels_like;
    }
    private ffeels_like: number;

    get pressure(): number { return this.fpressure; }
    set pressure(pressure: number) {
        this.fpressure = pressure;
    }
    private fpressure: number;

    get humidity(): number { return this.fhumidity; }
    set humidity(humidity: number) {
        this.fhumidity = humidity;
    }
    private fhumidity: number;

    get dew_point(): number { return this.fdew_point; }
    set dew_point(dew_point: number) {
        this.fdew_point = dew_point;
    }
    private fdew_point: number;

    get uvi(): number { return this.fuvi; }
    set uvi(uvi: number) {
        this.fuvi = uvi;
    }
    private fuvi: number;

    get clouds(): number { return this.fclouds; }
    set clouds(clouds: number) {
        this.fclouds = clouds;
    }
    private fclouds: number;

    get visibility(): number { return this.fvisibility; }
    set visibility(visibility: number) {
        this.fvisibility = visibility;
    }
    private fvisibility: number;

    get wind_speed(): number { return this.fwind_speed; }
    set wind_speed(wind_speed: number) {
        this.fwind_speed = wind_speed;
    }
    private fwind_speed: number;

    get wind_deg(): number { return this.fwind_deg; }
    set wind_deg(wind_deg: number) {
        this.fwind_deg = wind_deg;
    }
    private fwind_deg: number;

    get weather(): CurrentChildWeather[] { return this.fweather; }
    set weather(weather: CurrentChildWeather[]) {
        this.fweather = weather;
    }
    private fweather: CurrentChildWeather[];

    constructor() {
        this.fdt = 0;
        this.fsunrise = 0;
        this.fsunset = 0;
        this.ftemp = 0;
        this.ffeels_like = 0;
        this.fpressure = 0;
        this.fhumidity = 0;
        this.fdew_point = 0;
        this.fuvi = 0;
        this.fclouds = 0;
        this.fvisibility = 0;
        this.fwind_speed = 0;
        this.fwind_deg = 0;
        this.fweather = [];
    }
}

class DailyWeather {
    get dt(): number { return this.fdt; }
    set dt(dt: number) {
        this.fdt = dt;
    }
    private fdt: number;

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

    get temp(): Temperature { return this.ftemp; }
    set temp(temp: Temperature) {
        this.ftemp = temp;
    }
    private ftemp: Temperature;

    get feels_like(): Temperature { return this.ffeels_like; }
    set feels_like(feels_like: Temperature) {
        this.ffeels_like = feels_like;
    }
    private ffeels_like: Temperature;

    get pressure(): number { return this.fpressure; }
    set pressure(pressure: number) {
        this.fpressure = pressure;
    }
    private fpressure: number;

    get humidity(): number { return this.fhumidity; }
    set humidity(humidity: number) {
        this.fhumidity = humidity;
    }
    private fhumidity: number;

    get dew_point(): number { return this.fdew_point; }
    set dew_point(dew_point: number) {
        this.fdew_point = dew_point;
    }
    private fdew_point: number;

    get uvi(): number { return this.fuvi; }
    set uvi(uvi: number) {
        this.fuvi = uvi;
    }
    private fuvi: number;

    get clouds(): number { return this.fclouds; }
    set clouds(clouds: number) {
        this.fclouds = clouds;
    }
    private fclouds: number;

    get visibility(): number { return this.fvisibility; }
    set visibility(visibility: number) {
        this.fvisibility = visibility;
    }
    private fvisibility: number;

    get wind_speed(): number { return this.fwind_speed; }
    set wind_speed(wind_speed: number) {
        this.fwind_speed = wind_speed;
    }
    private fwind_speed: number;

    get wind_deg(): number { return this.fwind_deg; }
    set wind_deg(wind_deg: number) {
        this.fwind_deg = wind_deg;
    }
    private fwind_deg: number;

    get weather(): CurrentChildWeather[] { return this.fweather; }
    set weather(weather: CurrentChildWeather[]) {
        this.fweather = weather;
    }
    private fweather: CurrentChildWeather[];

    constructor() {
        this.fdt = 0;
        this.fsunrise = 0;
        this.fsunset = 0;
        this.ftemp = new Temperature();
        this.ffeels_like = new Temperature();
        this.fpressure = 0;
        this.fhumidity = 0;
        this.fdew_point = 0;
        this.fuvi = 0;
        this.fclouds = 0;
        this.fvisibility = 0;
        this.fwind_speed = 0;
        this.fwind_deg = 0;
        this.fweather = [];
    }
}

interface CurrentChildWeather {
    id: number;
    main: string;
    description: string;
    icon: string
}

// interface DailySevenDaysWeather {
//     dt: number;
//     sunrise: number;
//     sunset: number;
//     temp: DailySevenDaysTemperature;
//     feels_like: DailySevenDaysTemperature;
//     pressure: number;
//     humidity: number;
//     dew_point: number;
//     uvi: number;
//     clouds: number;
//     visibility: number;
//     wind_speed: number;
//     wind_deg: number;
//     pop: number;
//     weather: CurrentChildWeather[]
// }

class Temperature {
    get day(): number { return this.fday; }
    set day(day: number) {
        this.fday = day;
    }
    private fday: number;

    get min(): number { return this.fmin; }
    set min(min: number) {
        this.fmin = min;
    }
    private fmin: number;

    get max(): number { return this.fmax; }
    set max(max: number) {
        this.fmax = max;
    }
    private fmax: number;

    get night(): number { return this.fnight; }
    set night(night: number) {
        this.fnight = night;
    }
    private fnight: number;

    get eve(): number { return this.feve; }
    set eve(eve: number) {
        this.feve = eve;
    }
    private feve: number;

    get morn(): number { return this.fmorn; }
    set morn(morn: number) {
        this.fmorn = morn;
    }
    private fmorn: number;

    constructor() {
        this.fday = 0;
        this.feve = 0;
        this.fmax = 0;
        this.fmin = 0;
        this.fmorn = 0;
        this.fnight = 0;
    }
}