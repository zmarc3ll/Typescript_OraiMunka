export class Konyv {
    #nev : string
    #ertek : number

    constructor(nev : string, ertek : number) {
        this.#nev = nev;
        if(ertek >= 1 && ertek <= 10) {
            this.#ertek = ertek
        } else {
            throw new Error("Csak 1 és 10 között lehet megadni értékelést!")
        }
    }

    toString() : string {
        return "Könyv neve: " + this.#nev + " Könyv értékelése: " + this.#ertek;
    }

    public get nev() {
        return this.#nev
    }

    public get ertek() {
        return this.#ertek
    }
}