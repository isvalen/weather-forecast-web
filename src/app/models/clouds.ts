export class Coordinate {

    get all(): number { return this.fall; }
    set all(all: number) {
        this.fall = all;
    }
    private fall: number;
    constructor() {
        this.fall = 0;
    }
}