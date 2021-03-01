import { Coordinate } from './coordinate';
import { Description } from './description';
import { MainWeather } from './mainweather';
import { WeatherSystem } from './sys';

export class Weather {
  get base(): string { return this.fbase; }
  set base(base: string) {
    this.fbase = base;
  }
  private fbase: string;

  get name(): string { return this.fname; }
  set name(name: string) {
    this.fname = name;
  }
  private fname: string;

  get time(): string { return this.ftime; }
  set time(time: string) {
    this.ftime = time;
  }
  private ftime: string;

  get temperature(): string { return this.ftemperature; }
  set temperature(temperature: string) {
    this.ftemperature = temperature;
  }
  private ftemperature: string;

  get condition(): string { return this.fcondition; }
  set condition(condition: string) {
    this.fcondition = condition;
  }
  private fcondition: string;

  get coor(): Coordinate { return this.fcoor; }
  set coor(coor: Coordinate) {
    this.fcoor = coor;
  }
  private fcoor: Coordinate;

  get cod(): number { return this.fcod; }
  set cod(cod: number) {
    this.fcod = cod;
  }
  private fcod: number;

  get dt(): number { return this.fdt; }
  set dt(dt: number) {
    this.fdt = dt;
  }
  private fdt: number;

  get id(): number { return this.fid; }
  set id(id: number) {
    this.fid = id;
  }
  private fid: number;

  get timezone(): number { return this.ftimezone; }
  set timezone(timezone: number) {
    this.ftimezone = timezone;
  }
  private ftimezone: number;

  get main(): MainWeather { return this.fmain; }
  set main(main: MainWeather) {
    this.fmain = main;
  }
  private fmain: MainWeather;

  get weather(): Description[] { return this.fweather; }
  set weather(weather: Description[]) {
    this.fweather = weather;
  }
  private fweather: Description[];

  get sys(): WeatherSystem { return this.fsys; }
  set sys(sys: WeatherSystem) {
    this.fsys = sys;
  }
  private fsys: WeatherSystem;

  constructor() {
    this.fbase = "";
    this.fname = "";
    this.ftime = (new Date()).getHours() + ":" + (new Date().getMinutes());
    this.ftemperature = "";
    this.fcondition = "";
    this.fcoor = new Coordinate();
    this.fcod = 0;
    this.fdt = 0;
    this.fid = 0;
    this.ftimezone = 0;
    this.fmain = new MainWeather();
    this.fweather = [];
    this.fsys = new WeatherSystem();
  }

}