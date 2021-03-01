// export class City {

//   get id(): number { return this.fid; }
//   set id(id: number) {
//     this.fid = id;
//   }
//   private fid: number;


//   get name(): string { return this.fname; }
//   set name(name: string) {
//     this.fname = name;
//   }
//   private fname: string;

//   get latitude(): number { return this.flatitude; }
//   set latitude(latitude: number) {
//     this.flatitude = latitude;
//   }
//   private flatitude: number;

//   get longitude(): number { return this.flongitude; }
//   set longitude(longitude: number) {
//     this.flongitude = longitude;
//   }
//   private flongitude: number;

//   constructor() {
//     this.fid = 0;
//     this.fname = "";
//     this.flatitude = 0;
//     this.flongitude = 0;
//   }
// }
export interface City {

  id: number;
  name: string;
  latitude: number;
  longitude: number;
}