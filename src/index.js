"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const konyvek_1 = require("./konyvek");
let konyvek = [];
konyvek.push(new konyvek_1.Konyv('elso-konyv', 3));
konyvek.push(new konyvek_1.Konyv('masodik-konyv', 6));
konyvek.push(new konyvek_1.Konyv('harmadik-konyv', 9));
for (let i = 0; i < 30; i++) {
    let ertekeles = Math.floor(Math.random() * 10) + 1;
    konyvek.push(new konyvek_1.Konyv(('Book #' + i), ertekeles));
}
console.log('Az összes könyv:  ');
for (let k of konyvek) {
    console.log(k.toString());
}
console.log();
console.log('A 7 nél nagyobb értékelésű könyvek: ');
for (let k of konyvek) {
    if (k.ertek > 7) {
        console.log(k.toString());
    }
}
function bestof(konyvek) {
    let legjobb = konyvek[0];
    for (let k of konyvek) {
        if (k.ertek > legjobb.ertek) {
            legjobb = k;
        }
    }
    return legjobb;
}
console.log();
console.log('A legjobb értékelésű könyv: ' + bestof(konyvek).toString());
