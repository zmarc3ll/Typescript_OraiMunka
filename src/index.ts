import { Konyv } from "./konyvek";

let konyvek : Array<Konyv> =  [];

konyvek.push(new Konyv('elso-konyv', 3));
konyvek.push(new Konyv('masodik-konyv', 6));
konyvek.push(new Konyv('harmadik-konyv', 9));


for(let i = 0; i < 30; i++) {

    let ertekeles :number = Math.floor(Math.random() * 10) + 1;
    konyvek.push(new Konyv (('Book #' + i), ertekeles))
}
console.log('Az összes könyv:  ');

for(let k of konyvek) {

    console.log(k.toString())
}
console.log();
console.log('A 7 nél nagyobb értékelésű könyvek: ');

for(let k of konyvek) {
    if(k.ertek > 7) {
        console.log(k.toString());
    }
}

function bestof(konyvek : Array<Konyv>) : Konyv {
    let legjobb = konyvek[0];
    for(let k of konyvek) {
        if(k.ertek > legjobb.ertek) {
            legjobb = k;
        }
    }
    return legjobb;
}

console.log();
console.log('A legjobb értékelésű könyv: ' + bestof(konyvek).toString());