export class Coordinate {

    get latitude(): number { return this.flatitude; }
    set latitude(latitude: number) {
        this.flatitude = latitude;
    }
    private flatitude: number;

    get longitude(): number { return this.flongitude; }
    set longitude(longitude: number) {
        this.flongitude = longitude;
    }
    private flongitude: number;

    constructor() {
        this.flatitude = 0;
        this.flongitude = 0;
    }
}