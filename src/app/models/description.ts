export class Description {

    get main(): string { return this.fmain; }
    set main(main: string) {
        this.fmain = main;
    }
    private fmain: string;

    get description(): string { return this.fdescription; }
    set description(description: string) {
        this.fdescription = description;
    }
    private fdescription: string;

    constructor() {
        this.fmain = "";
        this.fdescription = "";
    }
}