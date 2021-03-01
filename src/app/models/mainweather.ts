export class MainWeather {

    get feels_like(): number { return this.ffeels_like; }
    set feels_like(feels_like: number) {
        this.ffeels_like = feels_like;
    }
    private ffeels_like: number;

    get grnd_level(): number { return this.fgrnd_level; }
    set grnd_level(grnd_level: number) {
        this.fgrnd_level = grnd_level;
    }
    private fgrnd_level: number;

    get humidity(): number { return this.fhumidity; }
    set humidity(humidity: number) {
        this.fhumidity = humidity;
    }
    private fhumidity: number;

    get pressure(): number { return this.fpressure; }
    set pressure(pressure: number) {
        this.fpressure = pressure;
    }
    private fpressure: number;

    get sea_level(): number { return this.fsea_level; }
    set sea_level(sea_level: number) {
        this.fsea_level = sea_level;
    }
    private fsea_level: number;

    get temp(): number { return this.ftemp; }
    set temp(temp: number) {
        this.ftemp = temp;
    }
    private ftemp: number;

    get temp_max(): number { return this.ftemp_max; }
    set temp_max(temp_max: number) {
        this.ftemp_max = temp_max;
    }
    private ftemp_max: number;

    get temp_min(): number { return this.ftemp_min; }
    set temp_min(temp_min: number) {
        this.ftemp_min = temp_min;
    }
    private ftemp_min: number;

    constructor() {
        this.ffeels_like = 0;
        this.fgrnd_level = 0;
        this.fhumidity = 0;
        this.fpressure = 0;
        this.fsea_level = 0;
        this.ftemp = 0;
        this.ftemp_max = 0;
        this.ftemp_min = 0;
    }
}